import { htmlTemplate } from './html-template';

export function orderLetter({
  orderNumber,
  username,
  total,
  orderDate,
  service,
}: {
  orderNumber: string;
  username: string;
  orderDate: string;
  service: string;
  total: string;
}) {
  return htmlTemplate({
    body: `
      <div class="wrapper">
        <header class="header">
          <img style="padding: 10px" src="https://i.ibb.co/wNXGRXNk/Group-2.png" alt="full-logo" class="logo" />
          <img src="https://i.ibb.co/chNvkLH1/vector-2.png" alt="full-logo" class="logo" />
        </header>
        <div class="main">
          <p class="title">Order Confirmation from ProWorkforceX</p>
          <p class="mainText">Dear ${username}</p>
          <p class="mainText"><b class="strong">Thank you for placing an order with ProWorkforceX!</b> We’re pleased to confirm that your order has been successfully received. Below are your order details:</p>
          <ul>
            <li class="mainText strong">Order Number: ${orderNumber}</li>
            <li class="mainText strong">Order Date: ${orderDate}</li>
            <li class="mainText strong">Services Ordered: ${service}</li>
            <li class="mainText strong">Total Amount: ${total}</li>
          </ul>
          <p class="mainText">Next, you’ll receive an email with payment instructions. Once we receive the payment, our team will begin working on your services and keep you informed on the progress.</p>
          <p class="mainText">Feel free to reach out if you have any questions or need assistance. Thank you for choosing ProWorkforceX for your HR needs.</p>
          <p class="mainText">Best regards,<br/><b class="strong">The ProWorkforceX Team</b></p>
        </div>
        <footer class="footer">
          <span>
            <img src="https://i.ibb.co/wNXGRXNk/Group-2.png" alt="full-logo" class="logoSm" />
            <p class="text" style="margin-top: 8px">For precise ranking and competitive analysis.</p>
          </span>
          <span style="margin-left: auto; display: flex">
            <div>
              <p class="heading">Email:</p>
              <a class="text" href="mailto:info@proworkforcex.com">info@proworkforcex.com</a>
            </div>
            <div style="margin-left: 40px">
              <p class="heading">Address:</p>
              <p class="text" style="width: 210px">Biskupa Kondého Street 5138/30, 929 01 Dunajská Streda, Slovakia</p>
            </div>
          </span>
        </footer>
      </div>
    `,
    style: `
      .wrapper {
        padding: 8px;
        width: 696px;
        margin: 0 auto;
      }
      
      .main {
        margin: 8px 0;
        padding: 40px 40px 160px 40px;
        border-radius: 12px;
        background: #FCFCFA;
      }
      
      .header {
        overflow: hidden;
        border-radius: 12px;
        background: #DFF56B;
        display: flex;
      }
      
      .strong {
        font-weight: 500;
      }
      
      .mainText {
        color: #093224;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 110%; /* 19.8px */
        margin-bottom: 16px;
      }
      
      .title {
        color: #093224;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: 110%; /* 30.8px */
      }
       
      .heading {
        color: #093224;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
       
      .text {
        color: #093224 !important;
        font-size: 11px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration: none;
      }
      
      .logo {
        width: 390px;
        height: 74px;
      }
      
      .logoSm {
        width: 157px;
        height: 30px;
      }
      
      .mask {
        width: 268px;
        height: 268px;
      }
      
      .footer {
        display: flex;
        border-radius: 12px;
        background: #F2FBC4;
        padding: 20px;
      }
    `,
  });
}
