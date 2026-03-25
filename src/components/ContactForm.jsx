export default function ContactForm() {
  const submit = (e) => {
    e.preventDefault();
    alert("Заявка отправлена");
  };

  return (
    <section id="contact" className="section">
      <h2>Контакты</h2>
      <form className="form" onSubmit={submit}>
        <input placeholder="Имя" required />
        <input placeholder="Телефон" required />
        <button className="btn btn-primary">
          Отправить
        </button>
      </form>
    </section>
  );
}
