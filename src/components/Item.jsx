import React from 'react';

const formattByCurrency = {
  USD: (price) => `$${price}`,
  EUR: (price) => `\u20ac${price}`,
};

const Item = ({ data }) => {
  const { url, MainImage, title, currency_code, price, quantity } = data;
  console.log(data);
  const prettifiedTitle = title.length > 50 ? `${title.substring(0, 50)}...` : title;
  const formattedPrice = formattByCurrency?.[currency_code]?.(price) ?? `${price} ${currency_code}`;
  const quantityLevel = `level-${quantity <= 10 ? 'low' : (quantity <= 20 ? 'medium' : 'high')}`;

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={MainImage.url_570xN} alt='product' />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{prettifiedTitle}</p>
        <p className="item-price">{formattedPrice}</p>
        <p className={`item-quantity ${quantityLevel}`}>{`${quantity} left`}</p>
      </div>
    </div>
  );
};

export default Item;
