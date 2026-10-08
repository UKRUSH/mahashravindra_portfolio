import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import { emailFor, products, productsCta, productsHandoff, productsIntro, whatsappFor } from "@/content/portfolio";

/**
 * Brief §5.9: descriptive, not guaranteed, claims. Only a source-supplied
 * stage gets a badge (AI-to-AI Communication Hub); no inferred deployment
 * badges and no demo links, since none exist. The handoff diagram restates
 * the section intro and the §2.10 positioning line; it adds no new claims.
 */
export function Products() {
  const workflowChat = whatsappFor(productsCta.message);

  return (
    <section id="ai-products" className="section section--soft products-section" aria-labelledby="ai-products-title">
      <div className="container">
        <SectionHeading
          id="ai-products-title"
          eyebrow="AI product portfolio"
          title="AI support for everyday business work"
          description={productsIntro}
        />

        <div className="handoff">
          <div className="handoff-lane handoff-lane--ai">
            <h3 className="handoff-label">
              <Icon name="chip" /> AI workforce handles
            </h3>
            <ul className="handoff-chips">
              {productsHandoff.ai.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <span className="handoff-arrow" aria-hidden="true">
            <Icon name="arrowRight" />
          </span>
          <div className="handoff-lane handoff-lane--people">
            <h3 className="handoff-label">
              <Icon name="users" /> People handle
            </h3>
            <ul className="handoff-chips">
              {productsHandoff.people.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="grid-3 card-list product-grid">
          {products.map((product, index) => (
            <li className="card card--interactive card--stack product-card" key={product.title}>
              <div className="card-top">
                <span className="product-icon">
                  <Icon name={product.icon} />
                </span>
                <span className="product-meta">
                  {product.stage && <span className="badge">{product.stage}</span>}
                  <span className="product-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </span>
              </div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <div className="card-footer">
                <a className="product-link" href={emailFor(`Enquiry: ${product.title}`)}>
                  Discuss this solution<span className="sr-only">: {product.title}</span>
                  <Icon name="arrowRight" />
                </a>
              </div>
            </li>
          ))}
        </ul>

        <div className="products-cta">
          <div>
            <h3>{productsCta.title}</h3>
            <p>{productsCta.body}</p>
          </div>
          {/* WhatsApp works in any browser; email needs a configured mail app. */}
          <div className="products-cta-actions">
            {workflowChat ? (
              <a className="btn btn--primary" href={workflowChat} target="_blank" rel="noopener noreferrer">
                Discuss your workflow <Icon name="chat" />
                <span className="sr-only"> on WhatsApp (opens in a new tab)</span>
              </a>
            ) : (
              <a className="btn btn--primary" href={emailFor("AI solution enquiry")}>
                Discuss your workflow <Icon name="arrowRight" />
              </a>
            )}
            {workflowChat && (
              <a className="text-link products-cta-email" href={emailFor("AI solution enquiry")}>
                or email Mahesh
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
