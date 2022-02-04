import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { UserOutlined, PlusOutlined } from '@ant-design/icons';
import CommonTitle from '@/CommonTitle';
import CommonTable from '@/CommonTable';

const StyledUsers = styled.div`
  width: 1000px;
  #table-test {
    height: 500px;
    background-color: cornflowerblue;
  }
`;
const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const users = [
  {
    id: 'lcqp3861',
    name: 'Amalie Gyorgy',
    email: 'agyorgy0@phpbb.com',
    status: 'active',
  },
  {
    id: 'rrfr9557',
    name: 'Rourke Govinlock',
    email: 'rgovinlock1@amazon.com',
    status: 'inactive',
  },
  {
    id: 'evwv3968',
    name: 'Martino Keysall',
    email: 'mkeysall2@washington.edu',
    status: 'inactive',
  },
  {
    id: 'unaz1805',
    name: 'Lezley Janiszewski',
    email: 'ljaniszewski3@ox.ac.uk',
    status: 'inactive',
  },
  {
    id: 'nvzf4070',
    name: 'Emmerich Billyeald',
    email: 'ebillyeald4@wisc.edu',
    status: 'active',
  },
  {
    id: 'cdrd9387',
    name: 'Melodee Dovermann',
    email: 'mdovermann5@gravatar.com',
    status: 'active',
  },
  {
    id: 'sdcv1254',
    name: 'Rolf Gorstidge',
    email: 'rgorstidge6@bbc.co.uk',
    status: 'inactive',
  },
  {
    id: 'yexj8107',
    name: 'Fawn Challen',
    email: 'fchallen7@noaa.gov',
    status: 'active',
  },
  {
    id: 'hkje9040',
    name: 'Adelaida Purcell',
    email: 'apurcell8@printfriendly.com',
    status: 'inactive',
  },
  {
    id: 'ribj3630',
    name: 'Cullin Assandri',
    email: 'cassandri9@imgur.com',
    status: 'active',
  },
  {
    id: 'wioe0125',
    name: 'Rickert Prestwich',
    email: 'rprestwicha@godaddy.com',
    status: 'active',
  },
  {
    id: 'xosg8342',
    name: 'Adelina Acreman',
    email: 'aacremanb@archive.org',
    status: 'active',
  },
  {
    id: 'tyhr4272',
    name: 'Antonino Sylvester',
    email: 'asylvesterc@adobe.com',
    status: 'active',
  },
  {
    id: 'ultx2528',
    name: 'Lorie Bartolommeo',
    email: 'lbartolommeod@usatoday.com',
    status: 'inactive',
  },
  {
    id: 'xrwb4207',
    name: 'Matty Jaimez',
    email: 'mjaimeze@discovery.com',
    status: 'active',
  },
  {
    id: 'xerm8208',
    name: 'Heidi Bahike',
    email: 'hbahikef@goo.gl',
    status: 'active',
  },
  {
    id: 'fivl9218',
    name: 'Abel Baff',
    email: 'abaffg@cbc.ca',
    status: 'inactive',
  },
  {
    id: 'zhuv7770',
    name: 'Kai Emberton',
    email: 'kembertonh@t-online.de',
    status: 'active',
  },
  {
    id: 'pfyd7179',
    name: 'Richardo Vain',
    email: 'rvaini@hatena.ne.jp',
    status: 'active',
  },
  {
    id: 'zwnl6435',
    name: 'Jsandye Fancett',
    email: 'jfancettj@foxnews.com',
    status: 'inactive',
  },
  {
    id: 'ysop3144',
    name: 'Krystyna Loweth',
    email: 'klowethk@time.com',
    status: 'inactive',
  },
  {
    id: 'zwdj7107',
    name: 'Doyle Docket',
    email: 'ddocketl@godaddy.com',
    status: 'active',
  },
  {
    id: 'gaup8746',
    name: 'Orran Garrand',
    email: 'ogarrandm@epa.gov',
    status: 'inactive',
  },
  {
    id: 'smlv5573',
    name: 'Tobiah Tyzack',
    email: 'ttyzackn@irs.gov',
    status: 'active',
  },
  {
    id: 'cwym9399',
    name: 'Serene Plaid',
    email: 'splaido@paginegialle.it',
    status: 'inactive',
  },
  {
    id: 'fzqa3090',
    name: 'Sallyann Casolla',
    email: 'scasollap@imgur.com',
    status: 'inactive',
  },
  {
    id: 'mlon1017',
    name: 'Darrell Bulgen',
    email: 'dbulgenq@google.co.jp',
    status: 'active',
  },
  {
    id: 'ezmd1521',
    name: 'Desiri Fidilis',
    email: 'dfidilisr@spotify.com',
    status: 'active',
  },
  {
    id: 'hsom2899',
    name: 'Nestor Kincaid',
    email: 'nkincaids@whitehouse.gov',
    status: 'inactive',
  },
  {
    id: 'xqxu8389',
    name: 'Tildie Vlasin',
    email: 'tvlasint@123-reg.co.uk',
    status: 'inactive',
  },
];
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
  },
];

const Users = () => {
  const TITLE_TEXT = 'Users';
  const MAX_ROW_SIZE = 10;
  return (
    <StyledUsers>
      <StyledHeader>
        <CommonTitle text={TITLE_TEXT} IconComponent={UserOutlined} />
        <Button type="primary" shape="round" icon={<PlusOutlined />}>
          Add
        </Button>
      </StyledHeader>
      <CommonTable items={users} columns={columns} maxRowSize={MAX_ROW_SIZE} />
    </StyledUsers>
  );
};

export default Users;
