import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import img1 from "../assets/img/Frame 5imagew.png";
import img2 from "../assets/img/Frame 5imagew-1.png"
import img3 from "../assets/img/Frame 5imagew-2.png"
import img4 from "../assets/img/Frame 5imagew-3.png"

function SoftSkills() {
  const SoftSkillsdata = [
    
      { img: img2, title: "مهارات التواصل", content:"هتتعلم معانا ازاي تتواصل مع الآخرين و تعبر عن آرائك." },
      { img: img4, title: "تنظيم الوقت" ,content:"هنساعدك تدير وقتك, تنظمه وكمان تحدد أولوياتك عشان تقدر تنجز المهام المطلوبة منك بإتقان."},
      {img: img1, title: "اِجتياز الإنترفيو", content: "هنساعدك ازاي تقنع صاحب العمل إنك المرشح المناسب للمنصب من خلال التدريبات المسؤولة عن  زيادة ثقتك بنفسك." },
      { img: img3, title: "مهارة البرزنتشن" ,content:"هتتعرف على طريقة سهلة و بسيطة لتقديم الرسالة للآخرين , وتفسير وفهم عقلية المستمعين قدر الإمكان، وإشراك الجمهور في العرض."},
  ];
  console.log(SoftSkillsdata[0].img);
  return (
    <section className="container">
      <h2>أهم السوفت سكيلز</h2>

      <Row xs={1} md={2} lg={4} className="g-4">
        {SoftSkillsdata.map((val, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={val.img} alt={val.title} />
              <Card.Body>
                <Card.Title>{val.title}</Card.Title>
                <Card.Text>{val.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default SoftSkills;
