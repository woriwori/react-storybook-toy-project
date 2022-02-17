import React, { useCallback, useMemo, useState } from 'react';
import CommonTable from '@/components/common/CommonTable/CommonTable';
import CommonTab from '@/components/common/CommonTab';
import ShadowCardLayout from '@/layout/ShadowCardLayout';
import ChangeStatusButton from '@/components/users/ChangeStatusButton';

const USERS = [
  {
    id: 'mcdz6546',
    name: 'Reider Frandsen',
    email: 'rfrandsen0@kickstarter.com',
    status: 'INACTIVE',
    key: 1,
  },
  {
    id: 'vzrl7489',
    name: 'Roscoe Carwardine',
    email: 'rcarwardine1@theglobeandmail.com',
    status: 'INACTIVE',
    key: 2,
  },
  {
    id: 'etzq9499',
    name: 'Walsh Wodham',
    email: 'wwodham2@creativecommons.org',
    status: 'INACTIVE',
    key: 3,
  },
  {
    id: 'kdcy7512',
    name: 'Saul Mugleston',
    email: 'smugleston3@indiegogo.com',
    status: 'INACTIVE',
    key: 4,
  },
  {
    id: 'mtlv9828',
    name: 'Lucian Burker',
    email: 'lburker4@cnn.com',
    status: 'INACTIVE',
    key: 5,
  },
  {
    id: 'icjk6201',
    name: 'Rowland Madner',
    email: 'rmadner5@china.com.cn',
    status: 'INACTIVE',
    key: 6,
  },
  {
    id: 'uzik5330',
    name: 'Pembroke Gutowska',
    email: 'pgutowska6@t-online.de',
    status: 'ACTIVE',
    key: 7,
  },
  {
    id: 'traq9705',
    name: 'Barde Rosier',
    email: 'brosier7@blog.com',
    status: 'INACTIVE',
    key: 8,
  },
  {
    id: 'tkig8521',
    name: 'Bette Gosker',
    email: 'bgosker8@nps.gov',
    status: 'ACTIVE',
    key: 9,
  },
  {
    id: 'pvit5893',
    name: 'Kimberlee Randleson',
    email: 'krandleson9@mail.ru',
    status: 'INACTIVE',
    key: 10,
  },
  {
    id: 'jlel4733',
    name: 'Tiphani Kief',
    email: 'tkiefa@noaa.gov',
    status: 'INACTIVE',
    key: 11,
  },
  {
    id: 'rbpi1961',
    name: 'Hamlin Rizzetti',
    email: 'hrizzettib@timesonline.co.uk',
    status: 'ACTIVE',
    key: 12,
  },
  {
    id: 'gkqq4766',
    name: 'Gage Seer',
    email: 'gseerc@shutterfly.com',
    status: 'ACTIVE',
    key: 13,
  },
  {
    id: 'hggz1620',
    name: 'Fanchette Wickstead',
    email: 'fwicksteadd@unesco.org',
    status: 'INACTIVE',
    key: 14,
  },
  {
    id: 'hebh7597',
    name: 'Wheeler Graffham',
    email: 'wgraffhame@umich.edu',
    status: 'ACTIVE',
    key: 15,
  },
  {
    id: 'rvtz2669',
    name: 'Samson Faint',
    email: 'sfaintf@ibm.com',
    status: 'ACTIVE',
    key: 16,
  },
  {
    id: 'yukq1532',
    name: 'Blondie Pauli',
    email: 'bpaulig@odnoklassniki.ru',
    status: 'INACTIVE',
    key: 17,
  },
  {
    id: 'vtow7077',
    name: 'Edeline Whicher',
    email: 'ewhicherh@123-reg.co.uk',
    status: 'INACTIVE',
    key: 18,
  },
  {
    id: 'yelu9558',
    name: 'Elene Jallin',
    email: 'ejallini@shareasale.com',
    status: 'INACTIVE',
    key: 19,
  },
  {
    id: 'upqq9698',
    name: 'Kerstin Ripsher',
    email: 'kripsherj@boston.com',
    status: 'INACTIVE',
    key: 20,
  },
  {
    id: 'mxbk2971',
    name: 'Kaela Deedes',
    email: 'kdeedesk@reverbnation.com',
    status: 'INACTIVE',
    key: 21,
  },
  {
    id: 'bvnk6864',
    name: 'Dyane Laurenceau',
    email: 'dlaurenceaul@wp.com',
    status: 'INACTIVE',
    key: 22,
  },
  {
    id: 'cbvr4104',
    name: 'Grazia Regus',
    email: 'gregusm@accuweather.com',
    status: 'INACTIVE',
    key: 23,
  },
  {
    id: 'mlan6020',
    name: 'Rosalynd Rousell',
    email: 'rrouselln@mapy.cz',
    status: 'INACTIVE',
    key: 24,
  },
  {
    id: 'nqyf7969',
    name: 'Fayre Vennard',
    email: 'fvennardo@delicious.com',
    status: 'ACTIVE',
    key: 25,
  },
  {
    id: 'dvoo8604',
    name: 'Jacklin Ivatt',
    email: 'jivattp@google.es',
    status: 'INACTIVE',
    key: 26,
  },
  {
    id: 'abwq8671',
    name: 'Hieronymus Snodden',
    email: 'hsnoddenq@constantcontact.com',
    status: 'INACTIVE',
    key: 27,
  },
  {
    id: 'nltw4837',
    name: 'Ruthe Veazey',
    email: 'rveazeyr@sitemeter.com',
    status: 'ACTIVE',
    key: 28,
  },
  {
    id: 'jjej5358',
    name: 'Kristien Whiteley',
    email: 'kwhiteleys@live.com',
    status: 'ACTIVE',
    key: 29,
  },
  {
    id: 'rgrs3003',
    name: 'Husein Lyngsted',
    email: 'hlyngstedt@hatena.ne.jp',
    status: 'ACTIVE',
    key: 30,
  },
];

const Users = () => {
  const MAX_ROW_SIZE = 10;
  const TAB_LIST = [
    { text: 'Active', key: 'ACTIVE' },
    { text: 'Inactive', key: 'INACTIVE' },
  ];

  const [activeTab, setActiveTab] = useState(TAB_LIST[0]);

  const COLUMNS = useMemo(
    () => [
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
        render: () => <ChangeStatusButton status={activeTab.key} />,
      },
    ],
    [activeTab]
  );
  const getUsers = () => USERS;

  const currentUsers = useMemo(() => {
    const users = getUsers();
    return users.filter(({ status }) => status === activeTab.key);
  }, [activeTab]);

  const onChangeTab = useCallback(
    (key) => {
      setActiveTab(key);
    },
    [setActiveTab]
  );

  return (
    <ShadowCardLayout style={{ width: 1000 }}>
      <CommonTab
        defaultTab={activeTab}
        tabList={TAB_LIST}
        onChange={onChangeTab}>
        <CommonTable
          items={currentUsers}
          columns={COLUMNS}
          maxRowSize={MAX_ROW_SIZE}
        />
      </CommonTab>
    </ShadowCardLayout>
  );
};

export default Users;
