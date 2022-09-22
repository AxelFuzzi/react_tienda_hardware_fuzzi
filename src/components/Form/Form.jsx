import { addDoc, collection, serverTimestamp, } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../../firebaseConfig';

export const Form = ({ cart, totalPrice, clear, handleId }) => {
    const [nombre, setNombre] = useState('');
    const [numero, setNumero] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const order = {
            buyer: { nombre: nombre, numero: numero, email: email },
            items: cart,
            date: serverTimestamp(),
            total: totalPrice
        };

        const ordersCollection = collection(db, 'orders');

        addDoc(ordersCollection, order).then((resp) => {
            handleId(resp.id);
            clear();
        });
    };

    const handleChangeNombre = (event) => {
        setNombre(event.target.value);
    };

    const handleChangeNumero = (event) => {
        setNumero(event.target.value);
    };

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre..."
                    name="nombre"
                    value={nombre}
                    onChange={handleChangeNombre}
                />
                <input
                    type="number"
                    placeholder="Numero..."
                    name="numero"
                    value={numero}
                    onChange={handleChangeNumero}
                />
                <input
                    type="mail"
                    placeholder="Email..."
                    name="email"
                    value={email}
                    onChange={handleChangeEmail}
                />
                <button>Enviar</button>
            </form>
        </div>
    );
}; 