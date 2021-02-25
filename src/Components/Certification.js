import React from 'react';

const Certification = ({ data }) => {
    if (data) {
        var earnCertification = data.earnCertification.map(function (earnCertification) {
            var certificationImage = "images/portfolio/" + earnCertification.image;
            return (
                <div key={earnCertification.title} className="columns certification-item">
                    <div className="item-wrap">
                        <a href={earnCertification.url} title={earnCertification.title}>
                            <img alt={earnCertification.title} src={certificationImage} />
                            <div className="overlay">
                                <div className="certification-item-meta">
                                    <h5>{earnCertification.title}</h5>
                                    <p>{earnCertification.category}</p>
                                </div>
                            </div>
                            <div className="link-icon">
                                <i className="fa fa-link"></i>
                            </div>
                        </a>
                    </div>
                </div>
            );
        });
    }

    return (
        <section id="certification">
            <div className="row">
                <div className="twelve columns collapsed">
                    <h1>Computer Programming Certifications</h1>

                    <div id="certification-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        {earnCertification}
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Certification;