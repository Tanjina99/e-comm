import Login from "@/components/auth/Login";
import { Dropdown } from "antd";
import { useState } from "react";

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const items = [
        {
          key: '1',
          label: (
            <div onClick={(e) => e.stopPropagation()}> {/* Prevent dropdown from closing */}
              <Login />
            </div>
          ),
        },
      ];
  const handleClickUser = () => {
    console.log("test");
  };

  const handleDropdown = () => {
    setIsOpen(!isOpen);
}
  return (
    <>
      <Dropdown
      open={isOpen}
      placement="bottom"
        menu={{
          items,
        }}
        trigger={['click']}
      >
        <a onClick={(e) => {
            e.preventDefault();
            handleDropdown();
        }}>
          <span onClick={handleClickUser}>
            <i className="far fa-user" />
          </span>
        </a>
      </Dropdown>
    </>
  );
};

export default UserMenu;
