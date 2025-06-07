import { useState } from "react";
import '../css/ModifyAura.css';

export const ModifyAura = () => {
    const [userName, setUserName] = useState("");
    const [actionType, setActionType] = useState("add");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!userName || !description || amount <= 0) {
            alert("Per favore, completa tutti i campi in modo valido.");
            return;
        }

        const data = {
            userName,
            actionType,
            description,
            amount,
        };

        console.log("Richiesta inviata:", data);

        // Reset campi
        setUserName("");
        setActionType("add");
        setDescription("");
        setAmount(0);
    };

    return (
        <div className="modify-aura-container">
            <h1 className="modify-aura-title">
                Ecco il posto perfetto per aggiungere o togliere Aura alla gente!
            </h1>

            <form onSubmit={handleSubmit} className="modify-aura-form">
                <div className="form-group">
                    <label>Qual è il nome della persona?</label>
                    <input
                        type="text"
                        name="userName"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Solo nome"
                    />
                </div>

                <div className="form-group">
                    <label>Vuoi aggiungere o togliere aura?</label>
                    <select
                        value={actionType}
                        onChange={(e) => setActionType(e.target.value)}
                    >
                        <option value="add">➕ Aggiungi aura</option>
                        <option value="remove">➖ Togli aura</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Motivo / Azione della persona</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={3}
                        placeholder="Es. Ha aiutato un anziano ad attraversare"
                    />
                </div>

                <div className="form-group">
                    <label>Quanti punti aura?</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        min="1"
                        max="150"
                    />
                </div>

                <button type="submit">Invia richiesta</button>
            </form>
        </div>
    );
};
