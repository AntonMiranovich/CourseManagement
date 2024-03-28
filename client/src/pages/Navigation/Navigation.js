import style from "./style.module.scss";
import Header from "../../componemt/Header/Header";
import { Input } from '@mantine/core';
import { Button } from '@mantine/core';
import { useState } from "react";

function Navigation() {


    const [data, setData] = useState([{
        title: 'Курс',
        place: 'Введите название курса'
    }, {
        title: 'Описание',
        place: 'Введите описание курса'
    }])


    return (<div>
        <Header />
        <div className={style.wrapper}>
            <div className={style.name}>
                <h3 onClick={() => setData([{
                    title: 'Курс',
                    place: 'Введите название курса'
                }, {
                    title: 'Описание',
                    place: 'Введите описание курса'
                }])}>Создание</h3>

                <h3 onClick={() => setData([{
                    title: 'ID',
                    place: 'Введите ID курса'
                }, {
                    title: 'Курс',
                    place: 'Введите название курса'
                }, {
                    title: 'Описание',
                    place: 'Введите описание курса'
                }])}>Обновление</h3>

                <h3 onClick={() => setData([{
                    title: 'ID',
                    place: 'Введите ID курса'
                }])}>Удаление</h3>
            </div>

            {data.map((el) => <div className={style.course}><p>{el.title}</p>  <Input placeholder={el.place} /></div>)}

            <Button style={{ marginTop: '10px' }} fullWidth>Button</Button>
        </div>
    </div>);
}

export default Navigation;