import React, { useCallback, useMemo, useState } from 'react';
import CommonTable from '@/common/CommonTable';
import CommonTab from '@/common/CommonTab';
import ShadowCardLayout from '@/layout/ShadowCardLayout';
import ActionButtons from '@/users/ActionButtons';

const USERS = [
  {
    id: 'mcdz6546',
    name: 'Reider Frandsen',
    email: 'rfrandsen0@kickstarter.com',
    status: 'inactive',
    key: 1,
  },
  {
    id: 'vzrl7489',
    name: 'Roscoe Carwardine',
    email: 'rcarwardine1@theglobeandmail.com',
    status: 'inactive',
    key: 2,
  },
  {
    id: 'etzq9499',
    name: 'Walsh Wodham',
    email: 'wwodham2@creativecommons.org',
    status: 'inactive',
    key: 3,
  },
  {
    id: 'kdcy7512',
    name: 'Saul Mugleston',
    email: 'smugleston3@indiegogo.com',
    status: 'inactive',
    key: 4,
  },
  {
    id: 'mtlv9828',
    name: 'Lucian Burker',
    email: 'lburker4@cnn.com',
    status: 'inactive',
    key: 5,
  },
  {
    id: 'icjk6201',
    name: 'Rowland Madner',
    email: 'rmadner5@china.com.cn',
    status: 'inactive',
    key: 6,
  },
  {
    id: 'uzik5330',
    name: 'Pembroke Gutowska',
    email: 'pgutowska6@t-online.de',
    status: 'active',
    key: 7,
  },
  {
    id: 'traq9705',
    name: 'Barde Rosier',
    email: 'brosier7@blog.com',
    status: 'inactive',
    key: 8,
  },
  {
    id: 'tkig8521',
    name: 'Bette Gosker',
    email: 'bgosker8@nps.gov',
    status: 'active',
    key: 9,
  },
  {
    id: 'pvit5893',
    name: 'Kimberlee Randleson',
    email: 'krandleson9@mail.ru',
    status: 'inactive',
    key: 10,
  },
  {
    id: 'jlel4733',
    name: 'Tiphani Kief',
    email: 'tkiefa@noaa.gov',
    status: 'inactive',
    key: 11,
  },
  {
    id: 'rbpi1961',
    name: 'Hamlin Rizzetti',
    email: 'hrizzettib@timesonline.co.uk',
    status: 'active',
    key: 12,
  },
  {
    id: 'gkqq4766',
    name: 'Gage Seer',
    email: 'gseerc@shutterfly.com',
    status: 'active',
    key: 13,
  },
  {
    id: 'hggz1620',
    name: 'Fanchette Wickstead',
    email: 'fwicksteadd@unesco.org',
    status: 'inactive',
    key: 14,
  },
  {
    id: 'hebh7597',
    name: 'Wheeler Graffham',
    email: 'wgraffhame@umich.edu',
    status: 'active',
    key: 15,
  },
  {
    id: 'rvtz2669',
    name: 'Samson Faint',
    email: 'sfaintf@ibm.com',
    status: 'active',
    key: 16,
  },
  {
    id: 'yukq1532',
    name: 'Blondie Pauli',
    email: 'bpaulig@odnoklassniki.ru',
    status: 'inactive',
    key: 17,
  },
  {
    id: 'vtow7077',
    name: 'Edeline Whicher',
    email: 'ewhicherh@123-reg.co.uk',
    status: 'inactive',
    key: 18,
  },
  {
    id: 'yelu9558',
    name: 'Elene Jallin',
    email: 'ejallini@shareasale.com',
    status: 'inactive',
    key: 19,
  },
  {
    id: 'upqq9698',
    name: 'Kerstin Ripsher',
    email: 'kripsherj@boston.com',
    status: 'inactive',
    key: 20,
  },
  {
    id: 'mxbk2971',
    name: 'Kaela Deedes',
    email: 'kdeedesk@reverbnation.com',
    status: 'inactive',
    key: 21,
  },
  {
    id: 'bvnk6864',
    name: 'Dyane Laurenceau',
    email: 'dlaurenceaul@wp.com',
    status: 'inactive',
    key: 22,
  },
  {
    id: 'cbvr4104',
    name: 'Grazia Regus',
    email: 'gregusm@accuweather.com',
    status: 'inactive',
    key: 23,
  },
  {
    id: 'mlan6020',
    name: 'Rosalynd Rousell',
    email: 'rrouselln@mapy.cz',
    status: 'inactive',
    key: 24,
  },
  {
    id: 'nqyf7969',
    name: 'Fayre Vennard',
    email: 'fvennardo@delicious.com',
    status: 'active',
    key: 25,
  },
  {
    id: 'dvoo8604',
    name: 'Jacklin Ivatt',
    email: 'jivattp@google.es',
    status: 'inactive',
    key: 26,
  },
  {
    id: 'abwq8671',
    name: 'Hieronymus Snodden',
    email: 'hsnoddenq@constantcontact.com',
    status: 'inactive',
    key: 27,
  },
  {
    id: 'nltw4837',
    name: 'Ruthe Veazey',
    email: 'rveazeyr@sitemeter.com',
    status: 'active',
    key: 28,
  },
  {
    id: 'jjej5358',
    name: 'Kristien Whiteley',
    email: 'kwhiteleys@live.com',
    status: 'active',
    key: 29,
  },
  {
    id: 'rgrs3003',
    name: 'Husein Lyngsted',
    email: 'hlyngstedt@hatena.ne.jp',
    status: 'active',
    key: 30,
  },
];

const Users = () => {
  const MAX_ROW_SIZE = 10;
  const TAB_LIST = [
    { text: 'Active', key: 'active' },
    { text: 'Inactive', key: 'inactive' },
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
        render: () => <ActionButtons status={activeTab.key} />,
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
        activeTab={activeTab}
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
