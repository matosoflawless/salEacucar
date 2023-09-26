import React, { useState } from 'react';
import produtos from "../data/products";
import "./css/form.css";
import { useNavigate } from "react-router-dom";


function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
    const [cart, setCart] = useState([])
    
    
    
    const handleDataSubmit = () => {
        const data = { name, email, phone };
        setFormData(data);


    };
    const increaseQuantity = (nome) => {
        const updatedCart = cart.slice();
        let productFound = false;
    
        // Loop pelo cart a ver se tem algum item
        for (let i = 0; i < updatedCart.length; i++) {
            if (updatedCart[i].name === nome) {
                updatedCart[i].quantity += 1;
                productFound = true;
                break; // se sim sai do loop
            }
        }
    
        // senão adiciona
        if (!productFound) {
            updatedCart.push({ name: nome, quantity: 1 });
        }
    
        setCart(updatedCart);
    }
    // [{name: "", quantity: quantidade}]
    // procurar : como ver se um object existe num array ou não 
    // se sim aumenta + 1
    // quando clicko no button envio o nome do produto 
    // fazer push para um array com usestate 


    return (
    <div className='page-div'>
        <div className="contact-form">
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
            <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone" />
            <button onClick={handleDataSubmit}>Submit</button>
            <div>
                <p>Produtos:</p>
                {produtos.map((product, index) => (
                    <div key={index}>
                        <p>{product.name}</p>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <button onClick={() => increaseQuantity(product.name)}>Adicionar</button>
                    </div>
                ))}
                <div>
                    <h2>Os seus produtos: </h2>
                    {cart.map((product, index) => (
                        <div key={index}>
                            <p>Nome: {product.name}</p>
                            <p>Quantidade: {product.quantity}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <button className='agroo-button'>AGROO</button>
            </div>
            <div>
            <table border="1">
    <thead>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>
            <td>Row 1, Cell 3</td>
        </tr>
        <tr>
            <td>Row 2, Cells 1 & 2 merged</td>
            <td>Row 2, Cell 3</td>
        </tr>
        <tr>
            <td>Row 3, Cell 1</td>
            <td>Row 3 & 4, Cell 2 merged</td>
            <td>Row 3, Cell 3</td>
        </tr>
        <tr>
            <td>Row 4, Cell 1</td>
            <td>Row 4, Cell 3</td>
        </tr>
    </tbody>
</table>

            </div>
        </div>
        </div>
    );
}

export default ContactForm;

