import React, { useState } from 'react'

function ContactUs() {
    const [formStatus, setFormStatus] = useState('سجل الأن ')
    const onSubmit = (e) => {
      e.preventDefault()
      setFormStatus('تم إرسال البيانات')
      const { name, email, phone } = e.target.elements
      let conFom = {
        name: name.value,
        email: email.value,
        phone: phone.value,
      }

      $.ajax({
        type: "POST",
        url: "/newClient",
        data: conFom,
        dataType: "json",
        encode: true,
      }).done(function (data) {
        console.log(data);
      });
  
      event.preventDefault();

      
      console.log(conFom)
    }
    return (
 
    <section id='contact_us' className="container mt-5">
    <h2 >سجل الان</h2>
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="name">
          الاسم
        </label>
        <input className="form-control" type="text" id="name" name='name' required />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="email">
        الإيميل
        </label>
        <input className="form-control" type="email" id="email" name='email' required />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="phone">
        رقم الموبايل
        </label>
        <input className="form-control" type='tel' id="phone" name="phone" required />
      </div>
      <button className="btn btn-primary w-100 " type="submit">
        {formStatus}
      </button>
    </form>
  </section>

    )
}

export default ContactUs