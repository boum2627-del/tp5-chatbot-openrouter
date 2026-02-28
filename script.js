async function sendMessage() {
    const input = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    const message = input.value;
    if (!message) return;

    chatBox.innerHTML += <p><b>Vous:</b> ${message}</p>;
    input.value = '';

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": "Bearer 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",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "model": "google/gemini-2.0-flash-lite-preview-02-05:free",
            "messages": [{"role": "user", "content": message}]
        })
    });

    const data = await response.json();
    const aiText = data.choices[0].message.content;
    chatBox.innerHTML += <p><b>IA:</b> ${aiText}</p>;
}
