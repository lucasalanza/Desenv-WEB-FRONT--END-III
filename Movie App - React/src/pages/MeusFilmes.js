import { Input, Button, Spin } from "antd";
import React, { useState, useRef } from "react";
import { SearchOutlined } from "@ant-design/icons"
import Filme from "../components/Filme";

function ConsultaFilmes() {

    const inputmovie = useRef();
    const [listamovie, setListmovie] = useState([]);
    const [loading, setLoading] = useState(false);

    function consultarFilme() {
        //faz a chamada para a api

        let titulo = inputmovie.current.input.value;
        setLoading(true);
        if (titulo != '') {
            fetch('http://www.omdbapi.com/?apikey=1f46cdad&t=' + titulo)
                .then(r => {
                    return r.json();
                })
                .then(r => {
                    setListmovie([...listamovie, r]);

                })
                .catch(e => {
                    console.log(e);
                    alert('Filme não encontrado');

                })
                .finally(f => {
                    setLoading(false);
                    // inputmovie.current.input.value = '';
                })
        }
    }

    function excluirFilme(titulo) {
      //  setListmovie(listamovie.filter(x => x.titulo != titulo));
    }

    return (
        <div>
            <h1>Meus Filmes</h1>

            <Spin spinning={loading} delay={500} tip="Buscando...">
                <div>
                    <Input style={{ marginBottom: 10 }} placeholder="Titulo do filme (ingles)" ref={inputmovie} ></Input>
                    <Button onClick={() => consultarFilme()} type="primary"><SearchOutlined />Buscar</Button>
                </div>

                <div className="listamovie">
                    {
                        listamovie.map(function (value, index) {
                            return (
                                <Filme key={index} item={value} excluir={excluirFilme}></Filme>
                            )
                        })
                    }
                </div>
            </Spin>
        </div>
    )
}

export default ConsultaFilmes;