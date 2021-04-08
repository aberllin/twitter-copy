import { FaTwitter } from 'react-icons/fa'
import { BiHomeCircle } from 'react-icons/bi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { FiMail } from 'react-icons/fi'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { FiHash } from 'react-icons/fi'
import { FiBookmark } from 'react-icons/fi'
import { IoEllipsisHorizontalCircleOutline } from 'react-icons/io5'

import styled from 'styled-components'

export const NavigationBar = () => {
  return (
    <Wrapper>
      <TwitterIcon>
        <Icon>
          <FaTwitter />
        </Icon>
      </TwitterIcon>
      <div>
        <MenuItem>
          <Icon>
            <BiHomeCircle />
          </Icon>
          <div>Home</div>
        </MenuItem>
        <MenuItem>
          <Icon>
            <FiHash />
          </Icon>
          <div>Explore</div>
        </MenuItem>
        <MenuItem>
          <Icon>
            <IoMdNotificationsOutline />
          </Icon>
          <div style={{ paddingRight: '10px' }}>Notifications</div>
        </MenuItem>
        <MenuItem>
          <Icon>
            <FiMail />
          </Icon>
          <div>Messages</div>
        </MenuItem>
        <MenuItem>
          <Icon>
            <FiBookmark />
          </Icon>
          <div>Bookmarks</div>
        </MenuItem>
        <MenuItem>
          <Icon>
            <AiOutlineUnorderedList />
          </Icon>
          <div>Lists</div>
        </MenuItem>
        <MenuItem>
          <Icon>
            <AiOutlineUser />
          </Icon>
          <div>Profile</div>
        </MenuItem>
        <MenuItem>
          <Icon>
            <IoEllipsisHorizontalCircleOutline />
          </Icon>
          <div>More</div>
        </MenuItem>
      </div>
      <TweetButtonWrapper>
        <TweetButton>Tweet</TweetButton>
      </TweetButtonWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 300px;
  border-right: 1px solid #aab8c2;
  position: fixed;
`
const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  font-weight: 400;
  transition: ease-out 0.2s;

  &:hover {
    color: #5bc065;
    background: rgba(91, 192, 101, 0.1);
    border-radius: 50px;
  }
`

const TwitterIcon = styled.div`
  color: #1da1f2;
  display: flex;
  align-items: flex-start;
  padding: 15px 0;
  cursor: pointer;

  &:hover {
    background: rgba(29, 161, 242, 0.1);
    border-radius: 80px;
  }
`

const Icon = styled.div`
  font-size: 30px;
  padding: 0 20px;
`

const TweetButtonWrapper = styled.div`
  padding: 10px 20px 10px 0;
`
const TweetButton = styled.button`
  padding: 15px 80px;
  border-radius: 50px;
  border: none;
  background: rgb(91, 192, 101);
  color: white;
  font-size: 20px;
  box-shadow: rgb(0 0 0 / 8%) 0px 8px 28px;
  transition: ease-out 0.2s;
  cursor: pointer;

  &:hover {
    background: #297830;
  }
`
