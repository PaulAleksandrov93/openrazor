// Header.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { FaUser, FaShoppingCart, FaPhone } from 'react-icons/fa';
import logo from '../assets/logo_1.webp';
import './Header.css';


const AnimatedLink = animated(Link);
const AnimatedUserIcon = animated(FaUser);
const AnimatedCartIcon = animated(FaShoppingCart);

const Header = ({ cartItemCount }) => {
  const navigate = useNavigate();

  const menuItemProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const userIconProps = useSpring({
    transform: 'translateX(0)',
    from: { transform: 'translateX(-20px)' },
  });

  const cartIconProps = useSpring({
    transform: 'translateX(0)',
    from: { transform: 'translateX(20px)' },
  });

  return (
    <div className="HeaderContainer">
      <div className="HeaderContentWrapper">
        <div className="TopBlock">
          <img src={logo} alt="Logo" className="LogoImage" />
          <div className="PhoneNumberWrapper">
            <FaPhone className="PhoneNumberIcon" />
            <span className="PhoneNumber">+7 123 456 67 89</span>
          </div>
        </div>
        <div className="BottomBlock">
          <nav className="Menu">
            <AnimatedLink to="/" className="AnimatedMenuItem" style={menuItemProps}>
              Главная
            </AnimatedLink>
            <AnimatedLink to="/news" className="AnimatedMenuItem" style={menuItemProps}>
              Новости
            </AnimatedLink>
            <AnimatedLink to="/catalog" className="AnimatedMenuItem" style={menuItemProps}>
              Каталог товаров
            </AnimatedLink>
            <AnimatedLink to="/articles" className="AnimatedMenuItem" style={menuItemProps}>
              Статьи
            </AnimatedLink>
            <AnimatedLink to="/contacts" className="AnimatedMenuItem" style={menuItemProps}>
              Контакты
            </AnimatedLink>
            <AnimatedLink to="/reviews" className="AnimatedMenuItem" style={menuItemProps}>
              Отзывы и комментарии
            </AnimatedLink>
            <AnimatedLink to="/payment" className="AnimatedMenuItem" style={menuItemProps}>
              Оплата и доставка
            </AnimatedLink>
          </nav>
          <div className="IconWrapper">
            <div className="LoginWrapper">
              <div className="AnimatedMenuItem" style={menuItemProps} onClick={() => navigate('/login')}>
                <span className="EntryText">Войти</span>
                <AnimatedUserIcon className="UserIcon" style={userIconProps} />
              </div>
            </div>
            <div className="CartWrapper">
              <AnimatedLink to="/cart" className="AnimatedMenuItem" style={menuItemProps}>
                <span className="CartText">Корзина</span>
                <AnimatedCartIcon className="CartIcon" style={cartIconProps} />
                {cartItemCount > 0 && <span className="CartItemCount">{cartItemCount}</span>}
              </AnimatedLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;