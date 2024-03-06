import Navbar from "../../sufiyan/pages/Navbar"


function Contect() {
    return (
        <>
            <Navbar />
            <section style={{ "paddingBlock": "60px" }}>
                <h2 style={{ textAlign: "center", textTransform: "capitalize", color: 'blue', fontFamily: 'sans-serif', fontWeight: '700', fontSize: '40px' }}>Contact our team</h2>
                <div style={{ marginTop: '28px' }}>
                    <iframe style={{ width: '100%', height: '300px', }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2274.684438810173!2d10.485082175919334!3d55.241244731277554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464d25c02f7975a7%3A0x6640f18a7058d10!2sTrendbazaar!5e0!3m2!1sen!2sin!4v1701435224443!5m2!1sen!2sin" loading="lazy"></iframe>
                </div>
                <div style={{ maxWidth: '1200px', margin: "50px auto", paddingInline: '15px' }}>
                    <div style={{ marginTop: '28px', display: 'flex', justifyContent: 'center' }}>
                        <form action="https://formspree.io/f/meqbbngr" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px', width: '90%' }}>
                            <input
                                type="text"
                                placeholder="username"
                                name="username"
                                required
                                autoComplete="off"
                                style={{ outline: 'none', border: '1px solid #ccc', padding: '8px', transition: 'all', borderRadius: '12px', boxShadow: '0px 0px 5px rgba(0,0,0,0.4)' }}
                            />
                            <input
                                type="email"
                                placeholder="email"
                                name="email"
                                required
                                autoComplete="off"
                                style={{ outline: 'none', border: '1px solid #ccc', padding: '8px', transition: 'all', borderRadius: '12px', boxShadow: '0px 0px 5px rgba(0,0,0,0.4)' }}
                            />
                            <textarea placeholder="Enter description" cols="25" rows="5" autoComplete="off" name="description"
                                style={{ outline: 'none', border: '1px solid #ccc', padding: '8px', transition: 'all', borderRadius: '12px', boxShadow: '0px 0px 5px rgba(0,0,0,0.4)' }}
                            />
                            <button type="submit" style={{ paddingBlock: '8px', paddingInline: '16px', color: 'white', fontFamily: 'serif', border: 'none', outline: 'none', transition: '0.3s', fontSize: '16px', cursor: 'pointer', backgroundColor: '#f45f02' }}>Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contect