import { DeleteOutlined, PlusCircleFilled } from "@ant-design/icons";
import { Card } from "antd";

import Meta from "antd/es/card/Meta";
import React from "react";

function Filme(props) {
    return (
        <div>
            <Card hoverable style={{}} cover={<img alt='Poster do Filme' src={props.item.Poster}></img>}
                actions={[
                    <DeleteOutlined alt="Excluir" key={props.item.Title} onClick={props.excluir(props.item.title)}></DeleteOutlined>,
                ]}
            >
                <Meta title={props.item.Title}></Meta>
                <p>Data de Lançamento: {props.item.Released}</p>
                <p>Genero: {props.item.Genre}</p>
                <a href={"https://m.imdb.com/title/" + props.item.imdbID} target="_blank"><PlusCircleFilled></PlusCircleFilled>Saiba Mais</a>

            </Card>
        </div>
    )
}

export default Filme;