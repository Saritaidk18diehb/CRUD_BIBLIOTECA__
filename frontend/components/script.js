form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const selectedType = typeSelect.value;
    if (!selectedType || !fields[selectedType]) {
        alert("Selecciona un tipo de registro válido.");
        return;
    }

    const data = {};
    const inputs = dynamicFields.querySelectorAll("input");

    // Validar que los campos no estén vacíos
    let valid = true;
    inputs.forEach(input => {
        if (!input.value.trim()) {
            valid = false;
        }
        data[input.name] = input.value.trim();
    });

    if (!valid) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    try {
        const response = await fetch(`http://localhost:5000/api/${selectedType}s`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error("Error al guardar los datos.");
        }

        const savedData = await response.json();

        // Agregar fila a la tabla con los datos guardados
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${savedData._id}</td>
            <td>${selectedType.toUpperCase()}</td>
            ${Object.values(data).map(value => `<td>${value}</td>`).join("")}
            <td><button class="delete-btn">❌</button></td>
        `;
        tableBody.appendChild(row);

        // Evento para eliminar
        row.querySelector(".delete-btn").addEventListener("click", () => {
            row.remove();
        });

        // Limpiar formulario
        form.reset();
        dynamicFields.innerHTML = "";

    } catch (error) {
        console.error("Error:", error);
        alert("Hubo un error al guardar los datos.");
    }
});
