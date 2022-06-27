const testResult = [
  {
    ocr: {
      name: '이강일',
      jumin: '570710-1025518',
      issued_date: '2010.05.24',
      region: '서울특별시 관악구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055632_135/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055632_135/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055632_135/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 28,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '2093032462b94690cef5f1656309392',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '복문수',
      jumin: '880915-1473619',
      issued_date: '2014.06.13',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055636_369/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055636_369/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055636_369/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 27,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '서울 07-623470-12',
        driver_serial: '8OROWT',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '21560991562b946952d1221656309397',
    },
  },
  {
    ocr: {
      name: '허준환',
      jumin: '851016-1069434',
      issued_date: '2014.11.17',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055638_577/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055638_577/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055638_577/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 27,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '11-14-245436-20',
        driver_serial: 'FDO8WU',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '173488989962b946978a7d71656309399',
    },
  },
  {
    ocr: {
      name: '안상현',
      jumin: '850806-1333114',
      issued_date: '2022.03.10',
      region: '강원도 동해시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055641_020/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055641_020/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055641_020/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 24,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '17178959462b9469a0a61f1656309402',
    },
  },
  {
    ocr: {
      name: '연규석',
      jumin: '800608-1090917',
      issued_date: '2015.04.13',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055644_373/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055644_373/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055644_373/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-07-052125-11',
        driver_serial: 'EO7IR4',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '24069232862b9469d1a7ab1656309405',
    },
  },
  {
    ocr: {
      name: '한유정',
      jumin: '801002-2533112',
      issued_date: '2016.12.09',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055646_731/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055646_731/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055646_731/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '13-07-633753-60',
        driver_serial: 'PUNV8M',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '129329590962b9469f623fc1656309407',
    },
  },
  {
    ocr: {
      name: '어병호',
      jumin: '380120-1090010',
      issued_date: '2015.07.07',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055648_734/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055648_734/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055648_734/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '12-81-054050-21',
        driver_serial: '',
      },
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '하용수',
      jumin: '761016-1011135',
      issued_date: '2014.03.25',
      region: '경기지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055706_382/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055706_382/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055706_382/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 27,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '경기 00-809146-20',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '198294885162b946b32bd9b1656309427',
    },
  },
  {
    ocr: {
      name: '김동학',
      jumin: '791003-1042336',
      issued_date: '2007.01.03',
      region: '서울특별시 동작구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055708_582/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055708_582/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055708_582/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 27,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '49433247262b946b5575001656309429',
    },
  },
  {
    ocr: {
      name: '김준영',
      jumin: '830305-1123229',
      issued_date: '2017.08.14',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055711_284/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055711_284/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055711_284/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '12-03-608311-00',
        driver_serial: 'F890PF',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '34381791562b946b7e967b1656309431',
    },
  },
  {
    ocr: {
      name: '',
      jumin: '850701-1726912',
      issued_date: '2018.04.30',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055713_336/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055713_336/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055713_336/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '',
        driver_number: '23-04-006939-14',
        driver_serial: 'NE9W6W',
      },
    },
  },
  {
    ocr: {
      name: '조영우',
      jumin: '810917-1037427',
      issued_date: '2022.05.16',
      region: '서울특별시경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055714_700/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055714_700/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055714_700/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-00-247822-12',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '78920406662b946bb85d2f1656309435',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '김은하',
      jumin: '800826-2647913',
      issued_date: '2014.07.14',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055717_762/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055717_762/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055717_762/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '18-05-020697-00',
        driver_serial: '7UWUUH',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '132781505762b946be789d31656309438',
    },
  },
  {
    ocr: {
      name: '박천일',
      jumin: '850108-1703137',
      issued_date: '2012.03.07',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055720_015/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055720_015/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055720_015/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '서울 12-817086-30',
        driver_serial: '3433QP',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '147874836862b946c0ba0511656309440',
    },
  },
  {
    ocr: {
      name: '이기성',
      jumin: '670927-1051811',
      issued_date: '2015.02.23',
      region: '경기지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055722_132/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055722_132/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055722_132/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '11-92-632134-06',
        driver_serial: 'WVX19Y',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '176376691262b946c2df95a1656309442',
    },
  },
  {
    ocr: {
      name: '박민철',
      jumin: '810320-1124911',
      issued_date: '2016.01.27',
      region: '부산광역시 남구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055724_320/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055724_320/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055724_320/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '102731704962b946c5362c01656309445',
    },
  },
  {
    ocr: {
      name: '이승욱',
      jumin: '941209-1034517',
      issued_date: '2017.09.28',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055727_231/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055727_231/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055727_231/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '12-13-601938-71',
        driver_serial: '99979V',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '26422462062b946c812a901656309448',
    },
  },
  {
    ocr: {
      name: '김신영',
      jumin: '710106-2775415',
      issued_date: '2010.03.22',
      region: '인천광역시 계양구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055729_502/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055729_502/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055729_502/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '122135135062b946ca6023b1656309450',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '안다연',
      jumin: '960307-2184920',
      issued_date: '2018.06.21',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055734_678/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055734_678/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055734_678/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '11-18-630100-90',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '21225975462b946d068bd61656309456',
    },
  },
  {
    ocr: {
      name: '김비경',
      jumin: '880627-2069914',
      issued_date: '2006.01.02',
      region: '서울특별시 성동구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055737_887/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055737_887/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055737_887/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '61977392262b946d29d35a1656309458',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '한준규',
      jumin: '771220-1144017',
      issued_date: '2016.06.14',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055743_000/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055743_000/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055743_000/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '23-00-040979-36',
        driver_serial: 'UD01SG',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '212783878862b946d79abe61656309463',
    },
  },
  {
    ocr: {
      name: '유태민',
      jumin: '950921-1125517',
      issued_date: '2020.01.29',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055744_968/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055744_968/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055744_968/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '90475131762b946daade681656309466',
    },
  },
  {
    ocr: {
      name: '유정연',
      jumin: '790514-2319618',
      issued_date: '',
      region: '강원지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055748_471/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055748_471/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055748_471/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: { driver_type: '', driver_number: '', driver_serial: '' },
    },
  },
  {
    ocr: {
      name: '수혜실',
      jumin: '781023-2816714',
      issued_date: '2019.09.19',
      region: '경남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055749_463/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055749_463/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055749_463/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '20-19-024638-90',
        driver_serial: 'HONDIA',
      },
    },
  },
  {
    ocr: {
      name: '이은화',
      jumin: '790518-2221311',
      issued_date: '',
      region: '경기도 의정부시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055751_743/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055751_743/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055751_743/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: false,
      message: 'Issue date is invalid',
      error_code: 'A002',
      transaction_id: '50554740462b946e07542c1656309472',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '이승진',
      jumin: '850611-1357115',
      issued_date: '2019.05.09',
      region: '충북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055754_457/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055754_457/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055754_457/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '15-03-609766-33',
        driver_serial: '81OUEF',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '144890577362b946e3245a61656309475',
    },
  },
  {
    ocr: {
      name: '김종찬',
      jumin: '650510-1914228',
      issued_date: '2007.03.07',
      region: '부산광역시 수영구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055756_602/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055756_602/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055756_602/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '201416684662b946e54ebbb1656309477',
    },
  },
  {
    ocr: {
      name: '김우근',
      jumin: '850414-1074211',
      issued_date: '2017.10.20',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055759_056/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055759_056/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055759_056/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-17-222246-31',
        driver_serial: 'N1TU6R',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '63713892662b946e7afee61656309479',
    },
  },
  {
    ocr: {
      name: '권노혁',
      jumin: '710424-1701622',
      issued_date: '',
      region: '경북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055801_223/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055801_223/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055801_223/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '19-17-611094-10',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '106999445062b946eb0e7be1656309483',
    },
  },
  {
    ocr: {
      name: '윤승준',
      jumin: '810914-1121710',
      issued_date: '2014.12.30',
      region: '울산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055804_406/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055804_406/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055804_406/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종대형, 1종보통',
        driver_number: '22-00-034452-90',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '136967113362b946ed2b9ce1656309485',
    },
  },
  {
    ocr: {
      name: '김지은',
      jumin: '741205-2852536',
      issued_date: '2000.01.08',
      region: '대전광역시 서구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055806_464/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055806_464/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055806_464/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '2853847662b946ef9659c1656309487',
    },
  },
  {
    ocr: {
      name: '이지연',
      jumin: '740801-2036814',
      issued_date: '2004.09.15',
      region: '경기도 고양시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055809_334/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055809_334/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055809_334/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '173918964762b946f23e6f21656309490',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '원성준',
      jumin: '730928-1174110',
      issued_date: '2004.03.22',
      region: '충청남도 천안시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055813_570/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055813_570/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055813_570/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '176139106062b946f649ae91656309494',
    },
  },
  {
    ocr: {
      name: '조재성',
      jumin: '801202-1925712',
      issued_date: '2014.07.22',
      region: '경남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055816_036/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055816_036/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055816_036/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종대형, 1종보통',
        driver_number: '20-00-021205-31',
        driver_serial: '7DU6N7',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '157977997462b946f8d26301656309496',
    },
  },
  {
    ocr: {
      name: '심지선',
      jumin: '720525-2574611',
      issued_date: '2021.03.30',
      region: '울산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055818_079/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055818_079/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055818_079/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '26-04-014828-92',
        driver_serial: 'F1TEOB',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '33988367462b946fab459c1656309498',
    },
  },
  {
    ocr: {
      name: '안수경',
      jumin: '770428-2794710',
      issued_date: '2013.09.02',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055819_955/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055819_955/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055819_955/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '대구 13-044496-40',
        driver_serial: '8E1JGG',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '112603578662b946fcb6c8b1656309500',
    },
  },
  {
    ocr: {
      name: '최유정',
      jumin: '780711-2702619',
      issued_date: '2013.12.06',
      region: '경상북도 포항시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055822_083/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055822_083/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055822_083/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '61554492662b946ff1df161656309503',
    },
  },
  {
    ocr: {
      name: '김은진',
      jumin: '881221-2179010',
      issued_date: '2019.12.05',
      region: '제주특별자치도지사',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055825_026/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055825_026/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055825_026/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '24654256862b94701c97c11656309505',
    },
  },
  {
    ocr: {
      name: '서은숙',
      jumin: '731003-2785514',
      issued_date: '2020.12.21',
      region: '경상북도 경주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055827_850/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055827_850/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055827_850/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '143227490262b94704959271656309508',
    },
  },
  {
    ocr: {
      name: '최미라',
      jumin: '760208-2821011',
      issued_date: '2015.06.17',
      region: '경남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055830_311/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055830_311/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055830_311/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '20-00-019854-60',
        driver_serial: '6H7WIC',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '38298407062b94706e939b1656309510',
    },
  },
  {
    ocr: {
      name: '김영화',
      jumin: '790705-2018914',
      issued_date: '2020.04.21',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055832_135/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055832_135/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055832_135/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-10-056804-91',
        driver_serial: 'UP88VX',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '173178514462b94708c31e01656309512',
    },
  },
  {
    ocr: {
      name: '황태성',
      jumin: '860129-1829311',
      issued_date: '2019.10.28',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055834_064/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055834_064/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055834_064/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '20-04-013360-94',
        driver_serial: 'ZK7WH3',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '9493505762b9470ab1c971656309514',
    },
  },
  {
    ocr: {
      name: '정종민',
      jumin: '881104-1051412',
      issued_date: '2014.09.29',
      region: '충남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055835_971/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055835_971/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055835_971/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '16-14-624271-10',
        driver_serial: 'UI18UU',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '1941539862b9470cda11d1656309516',
    },
  },
  {
    ocr: {
      name: '변민선',
      jumin: '830320-2332825',
      issued_date: '2020.07.27',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055838_180/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055838_180/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055838_180/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '11-08-839320-40',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '107479333662b9470ee5b9e1656309518',
    },
  },
  {
    ocr: {
      name: '최윤아',
      jumin: '820531-2697812',
      issued_date: '2018.08.10',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055840_281/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055840_281/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055840_281/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '22-01-045394-81',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '11427306762b9471111c791656309521',
    },
  },
  {
    ocr: {
      name: '이미현',
      jumin: '800521-2042821',
      issued_date: '2019.11.01',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055842_329/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055842_329/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055842_329/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '13-01-836277-61',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '110293255862b94712ef6f31656309522',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '이점미',
      jumin: '760508-2648918',
      issued_date: '2011.07.11',
      region: '서울특별시 양천구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055844_918/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055844_918/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055844_918/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '156644110962b94715c10f61656309525',
    },
  },
  {
    ocr: {
      name: '정재윤',
      jumin: '850823-1703810',
      issued_date: '2018.08.10',
      region: '부산광역시 부산진구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055847_691/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055847_691/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055847_691/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 19,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '54423385762b94718614ae1656309528',
    },
  },
  {
    ocr: {
      name: '김세한',
      jumin: '790215-1703010',
      issued_date: '2017.11.28',
      region: '경북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055850_230/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055850_230/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055850_230/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종소형',
        driver_number: '19-97-617175-60',
        driver_serial: '661DSI',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '27812097162b9471b09a181656309531',
    },
  },
  {
    ocr: {
      name: '이호영',
      jumin: '870704-1675119',
      issued_date: '2014.01.28',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055852_462/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055852_462/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055852_462/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통, 2종소형',
        driver_number: '대구 06-034076-10',
        driver_serial: '6KQ7CC',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '103956486662b9471d401d71656309533',
    },
  },
  {
    ocr: {
      name: '김동욱',
      jumin: '830513-1010412',
      issued_date: '',
      region: '경기도 고양시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055854_474/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055854_474/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055854_474/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: false,
      message: 'Issue date is invalid',
      error_code: 'A002',
      transaction_id: '119636575162b9471fac1f61656309535',
    },
  },
  {
    ocr: {
      name: '손원경',
      jumin: '760117-2567113',
      issued_date: '2014.11.03',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055855_973/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055855_973/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055855_973/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '18-00-071577-61',
        driver_serial: '7FOIWU',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '135018327362b94720a6e161656309536',
    },
  },
  {
    ocr: {
      name: '이영우',
      jumin: '820621-1081316',
      issued_date: '2016.04.25',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055857_944/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055857_944/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055857_944/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '13-02-613237-60',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '79892338862b947228f8241656309538',
    },
  },
  {
    ocr: {
      name: '권미숙',
      jumin: '700831-2396514',
      issued_date: '2020.09.03',
      region: '충청북도 제천시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055859_788/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055859_788/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055859_788/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '26354560362b94724997b31656309540',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '조난이',
      jumin: '850809-2629722',
      issued_date: '2021.11.18',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055903_377/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055903_377/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055903_377/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '18-08-017207-62',
        driver_serial: 'U98TES',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '152736091162b9472824c1a1656309544',
    },
  },
  {
    ocr: {
      name: '김준기',
      jumin: '900123-1537910',
      issued_date: '',
      region: '전북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055905_382/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055905_382/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055905_382/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 1,
      driver_license: {
        driver_type: '',
        driver_number: '17-08-006362-90',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '60236244462b9472a297511656309546',
    },
  },
  {
    ocr: {
      name: '김문영',
      jumin: '581020-1041263',
      issued_date: '2018.04.24',
      region: '경기북부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055907_461/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055907_461/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055907_461/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-85-824768-93',
        driver_serial: '90EU8T',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '164573521662b9472c281a11656309548',
    },
  },
  {
    ocr: {
      name: '이지영',
      jumin: '731017-2683314',
      issued_date: '2012.11.21',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055909_355/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055909_355/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055909_355/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '대구 03-030482-40',
        driver_serial: '2151RD',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '30704858662b9472e105b21656309550',
    },
  },
  {
    ocr: {
      name: '손석호',
      jumin: '771005-1029611',
      issued_date: '2019.01.17',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055911_152/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055911_152/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055911_152/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '15-97-615396-60',
        driver_serial: 'OH969K',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '176517831162b9473005e381656309552',
    },
  },
  {
    ocr: {
      name: '김유찬',
      jumin: '740314-1030731',
      issued_date: '2015.10.05',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055913_267/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055913_267/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055913_267/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-01-024316-52',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '64036085862b94731df43d1656309553',
    },
  },
  {
    ocr: {
      name: '정연민',
      jumin: '750330-1789913',
      issued_date: '2018.04.17',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055915_282/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055915_282/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055915_282/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '13-92-652505-82',
        driver_serial: '1T0UWA',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '153315861262b947341442e1656309556',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '강예흔',
      jumin: '950623-2697826',
      issued_date: '2014.02.14',
      region: '서울특별시 구로구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055918_593/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055918_593/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055918_593/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 27,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
  },
  {
    ocr: {
      name: '강인나',
      jumin: '800905-2350832',
      issued_date: '2009.10.01',
      region: '충청북도 청주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055921_483/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055921_483/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055921_483/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '167579475162b9473a5eb891656309562',
    },
  },
  {
    ocr: {
      name: '이미경',
      jumin: '790615-2817611',
      issued_date: '2014.11.15',
      region: '경기지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055924_110/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055924_110/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055924_110/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '19-00-045154-60',
        driver_serial: 'FGO6GV',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '73537643062b9473cc121e1656309564',
    },
  },
  {
    ocr: {
      name: '김태훈',
      jumin: '880218-1006213',
      issued_date: '2012.03.09',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055925_939/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055925_939/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055925_939/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '서울 12-217160-80',
        driver_serial: '8853AP',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '178738135162b9473eabdcd1656309566',
    },
  },
  {
    ocr: {
      name: '박현석',
      jumin: '830425-1120739',
      issued_date: '2019.06.19',
      region: '경남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055927_914/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055927_914/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055927_914/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '12-10-611222-41',
        driver_serial: 'HE09GO',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '45245337962b947409daa61656309568',
    },
  },
  {
    ocr: {
      name: '김수연',
      jumin: '791203-2012314',
      issued_date: '2013.03.04',
      region: '경북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055929_813/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055929_813/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055929_813/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '경북 03-021261-81',
        driver_serial: '8223VO',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '184849729762b94742937351656309570',
    },
  },
  {
    ocr: {
      name: '임경화',
      jumin: '710910-2537014',
      issued_date: '2015.12.11',
      region: '충남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055931_851/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055931_851/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055931_851/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '16-01-634373-11',
        driver_serial: 'WVTF1Q',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '210816761762b947447ef721656309572',
    },
  },
  {
    ocr: {
      name: '하남미',
      jumin: '810325-2787818',
      issued_date: '2013.06.25',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055933_735/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055933_735/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055933_735/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 0,
      face_recog_time: 18,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '',
        driver_serial: '7367ZO',
      },
    },
  },
  {
    ocr: {
      name: '임현태',
      jumin: '860404-1076517',
      issued_date: '2006.09.27',
      region: '서울특별시 서초구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055934_966/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055934_966/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055934_966/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '208374553262b94747bcd5e1656309575',
    },
  },
  {
    ocr: {
      name: '박정언',
      jumin: '841220-2830417',
      issued_date: '2017.08.02',
      region: '경남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055937_486/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055937_486/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055937_486/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '20-03-007057-60',
        driver_serial: 'G2W7E9',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '132134866062b9474a240a61656309578',
    },
  },
  {
    ocr: {
      name: '송영경',
      jumin: '651202-2010922',
      issued_date: '',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055939_333/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055939_333/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055939_333/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '서울 89-873393-40',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '153814062262b9474c74ed11656309580',
    },
  },
  {
    ocr: {
      name: '김경희',
      jumin: '791020-2070017',
      issued_date: '2017.07.10',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055941_719/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055941_719/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055941_719/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 27,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '23-03-039035-81',
        driver_serial: 'N71FFT',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '145942961262b9474e7cbf31656309582',
    },
  },
  {
    ocr: {
      name: '심상갑',
      jumin: '680115-1543525',
      issued_date: '2015.05.06',
      region: '전북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055943_826/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055943_826/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055943_826/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 27,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '17-91-023935-93',
        driver_serial: 'W1FOVR',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '115443920462b947507ac4e1656309584',
    },
  },
  {
    ocr: {
      name: '이유준',
      jumin: '730810-1069528',
      issued_date: '2017.09.05',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055945_779/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055945_779/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055945_779/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '11-99-627368-81',
        driver_serial: 'E996GW',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '207165778762b947529bf291656309586',
    },
  },
  {
    ocr: {
      name: '양은지',
      jumin: '900825-2184717',
      issued_date: '2017.08.03',
      region: '강원도 춘천시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055947_964/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055947_964/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055947_964/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '190181477862b94754946ff1656309588',
    },
  },
  {
    ocr: {
      name: '김준성',
      jumin: '850507-1081411',
      issued_date: '2019.08.02',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055950_314/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055950_314/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055950_314/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-02-855456-73',
        driver_serial: 'V7UD6F',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '98258849762b9475767ae61656309591',
    },
  },
  {
    ocr: {
      name: '김용재',
      jumin: '680105-1462721',
      issued_date: '2006.03.03',
      region: '대전광역시 서구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055952_865/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055952_865/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055952_865/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '16720950762b94759e98321656309593',
    },
  },
  {
    ocr: {
      name: '김병석',
      jumin: '770110-1120912',
      issued_date: '2019.09.25',
      region: '강원지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055955_701/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055955_701/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055955_701/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 20,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '14-19-005937-80',
        driver_serial: 'DU6FRH',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '126745358162b9475c4b41a1656309596',
    },
  },
  {
    ocr: {
      name: '최승완',
      jumin: '950420-1011021',
      issued_date: '2019.11.13',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055957_468/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055957_468/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055957_468/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-19-836341-50',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '80057105862b9475e28f161656309598',
    },
  },
  {
    ocr: {
      name: '유다애',
      jumin: '910106-2199026',
      issued_date: '2012.05.15',
      region: '경기지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627055959_396/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627055959_396/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627055959_396/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '경기 12-031213-30',
        driver_serial: '8529QO',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '136811952762b947601c6d41656309600',
    },
  },
  {
    ocr: {
      name: '우성민',
      jumin: '810502-1783817',
      issued_date: '2019.07.12',
      region: '경상북도 포항시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060001_536/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060001_536/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060001_536/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 27,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '94125595262b94762839021656309602',
    },
  },
  {
    ocr: {
      name: '김수희',
      jumin: '850812-2155921',
      issued_date: '2015.02.23',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060004_242/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060004_242/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060004_242/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-05-637073-50',
        driver_serial: '1SU29L',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '97218991862b94764d61611656309604',
    },
  },
  {
    ocr: {
      name: '강지혜',
      jumin: '630918-2055611',
      issued_date: '2019.03.07',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060006_207/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060006_207/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060006_207/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-94-067619-10',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '167150939862b94766d37ff1656309606',
    },
  },
  {
    ocr: {
      name: '이창녕',
      jumin: '690205-1813113',
      issued_date: '2018.01.12',
      region: '인천광역시 남동구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060008_147/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060008_147/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060008_147/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '79625800762b94768e89ad1656309608',
    },
  },
  {
    ocr: {
      name: '황경희',
      jumin: '720314-2067916',
      issued_date: '2012.07.03',
      region: '강원도 철원군수',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060010_544/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060010_544/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060010_544/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '26685318862b9476b62ac61656309611',
    },
  },
  {
    ocr: {
      name: '박상길',
      jumin: '820722-1068918',
      issued_date: '2017.02.03',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060013_204/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060013_204/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060013_204/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-01-608434-02',
        driver_serial: '6VV602',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '24387443962b9476dd72b21656309613',
    },
  },
  {
    ocr: {
      name: '강창완',
      jumin: '880823-1127320',
      issued_date: '2016.12.30',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060015_046/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060015_046/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060015_046/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '12-09-028863-80',
        driver_serial: 'H7O0EU',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '202357382062b9476fb61f11656309615',
    },
  },
  {
    ocr: {
      name: '최광석',
      jumin: '820308-1058627',
      issued_date: '2020.05.19',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060016_908/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060016_908/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060016_908/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '11-03-650520-52',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '63264153662b94771a32ff1656309617',
    },
  },
  {
    ocr: {
      name: '이가영',
      jumin: '950918-2249219',
      issued_date: '2015.04.03',
      region: '경기지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060018_908/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060018_908/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060018_908/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '13-15-625231-10',
        driver_serial: 'TVRODC',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '146805405662b947738c73f1656309619',
    },
  },
  {
    ocr: {
      name: '안은영',
      jumin: '841102-2121122',
      issued_date: '2014.03.12',
      region: '경상남도 김해시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060020_786/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060020_786/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060020_786/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 18,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '198280424162b94775c5a241656309621',
    },
  },
  {
    ocr: {
      name: '이혜란',
      jumin: '840215-2177421',
      issued_date: '2018.06.07',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060024_536/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060024_536/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060024_536/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '13-08-044830-60',
        driver_serial: 'VFE87D',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '172254969962b94779412891656309625',
    },
  },
  {
    ocr: {
      name: '송광일',
      jumin: '890117-1637214',
      issued_date: '2014.07.29',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060026_765/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060026_765/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060026_765/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 17,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '18-07-006804-11',
        driver_serial: 'N8SCO3',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '63278574162b9477b5d56e1656309627',
    },
  },
  {
    ocr: {
      name: '김은희',
      jumin: '770221-2031912',
      issued_date: '2020.01.10',
      region: '경기북부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060028_727/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060028_727/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060028_727/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '13-10-807729-10',
        driver_serial: '79Z22U',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '107688110362b9477d673841656309629',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '박민정',
      jumin: '750117-2852416',
      issued_date: '2015.07.14',
      region: '울산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060032_565/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060032_565/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060032_565/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '12-96-625796-31',
        driver_serial: 'Y5S8QZ',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '6421724662b9478149a1b1656309633',
    },
  },
  {
    ocr: {
      name: '이광철',
      jumin: '730413-1121310',
      issued_date: '2017.12.05',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060034_514/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060034_514/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060034_514/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '12-03-628613-70',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '60819920262b9478320ebb1656309635',
    },
  },
  {
    ocr: {
      name: '김광진',
      jumin: '870110-1715717',
      issued_date: '2019.05.21',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060036_413/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060036_413/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060036_413/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종대형, 2종보통',
        driver_number: '22-11-006197-20',
        driver_serial: 'V1EUDR',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '23117746562b947852ead01656309637',
    },
  },
  {
    ocr: {
      name: '서희영',
      jumin: '861129-2011714',
      issued_date: '2015.06.11',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060038_634/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060038_634/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060038_634/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-15-225835-20',
        driver_serial: 'FU9OVO',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '56525215262b947875860d1656309639',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '김종우',
      jumin: '750116-1771721',
      issued_date: '2019.03.06',
      region: '경남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060041_751/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060041_751/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060041_751/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '12-98-626251-22',
        driver_serial: 'GOU6OC',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '107400818462b9478a5a4a71656309642',
    },
  },
  {
    ocr: {
      name: '강미선',
      jumin: '760928-2100118',
      issued_date: '2015.05.21',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060043_649/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060043_649/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060043_649/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '18-12-067595-30',
        driver_serial: '1UEGO2',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '58911353562b9478c520591656309644',
    },
  },
  {
    ocr: {
      name: '정서영',
      jumin: '780204-2173221',
      issued_date: '2008.02.13',
      region: '경기도 의정부시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060045_455/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060045_455/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060045_455/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '10170926162b9478e1e5fb1656309646',
    },
  },
  {
    ocr: {
      name: '이재화',
      jumin: '700116-1055613',
      issued_date: '2019.04.24',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060047_948/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060047_948/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060047_948/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '23-07-046172-51',
        driver_serial: 'DPOXQG',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '91426386962b94790bb1a71656309648',
    },
  },
  {
    ocr: {
      name: '박선영',
      jumin: '770313-2169211',
      issued_date: '2020.01.02',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060050_125/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060050_125/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060050_125/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '13-01-680838-40',
        driver_serial: 'FJ921E',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '18735186262b94792c1dd51656309650',
    },
  },
  {
    ocr: {
      name: '홍세현',
      jumin: '851119-1019312',
      issued_date: '2021.04.19',
      region: '서울특별시경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060052_068/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060052_068/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060052_068/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종대형, 1종보통, 원동기',
        driver_number: '11-02-841421-12',
        driver_serial: 'BU2FUV',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '180392278062b94794f2f301656309652',
    },
  },
  {
    ocr: {
      name: '박주석',
      jumin: '560610-1063311',
      issued_date: '2017.07.18',
      region: '서울특별시 강서구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060054_277/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060054_277/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060054_277/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '118619346262b947970cf261656309655',
    },
  },
  {
    ocr: {
      name: '손영숙',
      jumin: '830105-2696122',
      issued_date: '2015.04.07',
      region: '경북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060056_962/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060056_962/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060056_962/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '13-07-669180-50',
        driver_serial: 'OCC9VZ',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '119953531862b9479993edb1656309657',
    },
  },
  {
    ocr: {
      name: '김영아',
      jumin: '750511-2666111',
      issued_date: '2016.01.22',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060058_909/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060058_909/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060058_909/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-16-005101-70',
        driver_serial: 'U9S7D5',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '175140017762b9479b8e29c1656309659',
    },
  },
  {
    ocr: {
      name: '홍승휘',
      jumin: '720102-1912033',
      issued_date: '2010.12.05',
      region: '제주지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060100_909/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060100_909/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060100_909/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '12-02-016115-92',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '188089370162b9479d9303d1656309661',
    },
  },
  {
    ocr: {
      name: '감영국',
      jumin: '710625-1667815',
      issued_date: '2022.05.16',
      region: '경기도 수원시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060102_799/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060102_799/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060102_799/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
  },
  {
    ocr: {
      name: '이해자',
      jumin: '710829-2279429',
      issued_date: '2016.05.31',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060105_320/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060105_320/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060105_320/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-16-639430-90',
        driver_serial: 'D29765',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '187304744762b947a20f0901656309666',
    },
  },
  {
    ocr: {
      name: '최경숙',
      jumin: '690611-2787523',
      issued_date: '',
      region: '경북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060107_185/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060107_185/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060107_185/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '19-89-047687-80',
        driver_serial: '3OS7FY',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '40750780162b947a3dc66b1656309667',
    },
  },
  {
    ocr: {
      name: '이나경',
      jumin: '911029-2030816',
      issued_date: '2013.02.12',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060109_051/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060109_051/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060109_051/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '서울 13-206049-60',
        driver_serial: '8575BO',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '23976403762b947a5c651d1656309669',
    },
  },
  {
    ocr: {
      name: '장미진',
      jumin: '900807-2187626',
      issued_date: '2015.02.16',
      region: '인천광역시 서구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060111_084/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060111_084/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060111_084/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '160697791662b947a819fbe1656309672',
    },
  },
  {
    ocr: {
      name: '유황재',
      jumin: '790623-1066615',
      issued_date: '2008.11.17',
      region: '경기도 부천시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060113_834/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060113_834/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060113_834/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '214275740462b947aa87a2d1656309674',
    },
  },
  {
    ocr: {
      name: '심윤섭',
      jumin: '830215-1170051',
      issued_date: '2000.08.26',
      region: '경기도 성남시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060116_197/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060116_197/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060116_197/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 27,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '201848989162b947ad32eaf1656309677',
    },
  },
  {
    ocr: {
      name: '지승은',
      jumin: '710904-2337310',
      issued_date: '2014.07.07',
      region: '경남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060118_949/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060118_949/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060118_949/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '20-14-023563-60',
        driver_serial: 'F1PVDD',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '184966584862b947afaeb591656309679',
    },
  },
  {
    ocr: {
      name: '김정효',
      jumin: '730726-2928310',
      issued_date: '2020.01.29',
      region: '경남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060121_056/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060121_056/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060121_056/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '20-17-031951-11',
        driver_serial: 'ONON71',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '154777241962b947b1ae6781656309681',
    },
  },
  {
    ocr: {
      name: '권기용',
      jumin: '770624-1396711',
      issued_date: '2016.03.16',
      region: '충북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060122_930/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060122_930/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060122_930/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '15-94-030150-10',
        driver_serial: 'VX1IFK',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '113563885562b947b3b0b821656309683',
    },
  },
  {
    ocr: {
      name: '최준영',
      jumin: '741006-1148817',
      issued_date: '2022.04.15',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060125_273/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060125_273/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060125_273/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '23-91-054941-65',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '8711842262b947b6476e61656309686',
    },
  },
  {
    ocr: {
      name: '황재용',
      jumin: '690716-1788410',
      issued_date: '2013.06.24',
      region: '대구광역시 달서구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060127_430/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060127_430/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060127_430/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '125887528262b947b8276ba1656309688',
    },
  },
  {
    ocr: {
      name: '박주현',
      jumin: '830918-1178518',
      issued_date: '2017.03.13',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060129_812/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060129_812/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060129_812/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '19-02-052867-93',
        driver_serial: 'OP529D',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '207440441562b947baa7cf11656309690',
    },
  },
  {
    ocr: {
      name: '최승훈',
      jumin: '820210-1075616',
      issued_date: '2018.10.16',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060132_013/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060132_013/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060132_013/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 27,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '11-01-052855-53',
        driver_serial: 'WRQNWS',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '187296327962b947bcb41341656309692',
    },
  },
  {
    ocr: {
      name: '김형석',
      jumin: '750717-1551039',
      issued_date: '2016.01.11',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060133_924/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060133_924/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060133_924/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '18-01-054500-60',
        driver_serial: '6776N7',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '75021056062b947beb282e1656309694',
    },
  },
  {
    ocr: {
      name: '유정숙',
      jumin: '731124-2924018',
      issued_date: '2021.05.25',
      region: '경기도 고양시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060135_894/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060135_894/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060135_894/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 27,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '72021607462b947c0ab5ca1656309696',
    },
  },
  {
    ocr: {
      name: '이현주',
      jumin: '820715-2249111',
      issued_date: '2019.07.26',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060138_450/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060138_450/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060138_450/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '13-01-615094-83',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '99925539962b947c32eb101656309699',
    },
  },
  {
    ocr: {
      name: '임종금',
      jumin: '651106-2644237',
      issued_date: '2012.01.06',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060140_553/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060140_553/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060140_553/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '인천 12-001593-00',
        driver_serial: 'O829FO',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '207191511862b947c58521d1656309701',
    },
  },
  {
    ocr: {
      name: '정은숙',
      jumin: '750807-2526611',
      issued_date: '',
      region: '서울특별시 관악구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060142_712/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060142_712/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060142_712/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: false,
      message: 'Issue date is invalid',
      error_code: 'A002',
      transaction_id: '50519895362b947c7e637b1656309703',
    },
  },
  {
    ocr: {
      name: '박영철',
      jumin: '760201-1025914',
      issued_date: '2015.11.17',
      region: '경기지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060144_337/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060144_337/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060144_337/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '11-98-052010-60',
        driver_serial: 'WNO7WW',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '91784392662b947c9161351656309705',
    },
  },
  {
    ocr: {
      name: '장미진',
      jumin: '900807-2187626',
      issued_date: '2015.02.16',
      region: '인천광역시 서구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060146_368/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060146_368/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060146_368/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 27,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '72036353062b947cb2127e1656309707',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '김현희',
      jumin: '800712-2786211',
      issued_date: '2016.06.20',
      region: '경북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060151_145/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060151_145/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060151_145/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '19-06-615435-22',
        driver_serial: '96U777',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '134551491762b947cfdf7d21656309711',
    },
  },
  {
    ocr: {
      name: '한정훈',
      jumin: '820809-1779619',
      issued_date: '2017.04.13',
      region: '경북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060153_101/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060153_101/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060153_101/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '19-02-064743-11',
        driver_serial: 'RWD4OL',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '53684432762b947d1c0f851656309713',
    },
  },
  {
    ocr: {
      name: '박보아',
      jumin: '810529-2273219',
      issued_date: '2018.06.11',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060154_947/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060154_947/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060154_947/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-18-219681-00',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '119722430962b947d3cc7b61656309715',
    },
  },
  {
    ocr: {
      name: '김태자',
      jumin: '800606-1233617',
      issued_date: '2017.07.24',
      region: '경기도 파주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060157_094/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060157_094/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060157_094/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '1848002662b947d612cdf1656309718',
    },
  },
  {
    ocr: {
      name: '정동원',
      jumin: '820328-1932115',
      issued_date: '2012.01.17',
      region: '제주지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060159_784/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060159_784/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060159_784/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종대형, 1종보통',
        driver_number: '제주 04-008934-00',
        driver_serial: '5573ZP',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '154869225662b947d8812fb1656309720',
    },
  },
  {
    ocr: {
      name: '선덕',
      jumin: '751107-2648815',
      issued_date: '2014.10.10',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060201_957/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060201_957/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060201_957/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '13-05-012260-10',
        driver_serial: 'UU6262',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '102655827262b947da8e7f01656309722',
    },
  },
  {
    ocr: {
      name: '김은임',
      jumin: '820908-2318812',
      issued_date: '2011.04.08',
      region: '강원도 춘천시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060203_738/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060203_738/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060203_738/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '11942814562b947dca699d1656309724',
    },
  },
  {
    ocr: {
      name: '정화령',
      jumin: '860313-2169414',
      issued_date: '2008.12.29',
      region: '강원도 강릉시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060206_373/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060206_373/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060206_373/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '68412907262b947df4ef6b1656309727',
    },
  },
  {
    ocr: {
      name: '윤인숙',
      jumin: '720610-2783011',
      issued_date: '2013.12.26',
      region: '경북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060209_023/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060209_023/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060209_023/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '경북 96-617849-63',
        driver_serial: '18O6HO',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '12684263062b947e1cb9561656309729',
    },
  },
  {
    ocr: {
      name: '손영희',
      jumin: '651212-2221131',
      issued_date: '2000.03.15',
      region: '경기도 구리시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060211_050/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060211_050/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060211_050/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '209971214062b947e3b457d1656309731',
    },
  },
  {
    ocr: {
      name: '정은미',
      jumin: '750114-2029417',
      issued_date: '',
      region: '대전지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060213_434/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060213_434/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060213_434/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 20,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-06-850317-50',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '12159421662b947e63c1451656309734',
    },
  },
  {
    ocr: {
      name: '',
      jumin: '780820-1008912',
      issued_date: '2015.12.17',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060215_694/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060215_694/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060215_694/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 19,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '11-98-801536-10',
        driver_serial: '9ZN78B',
      },
    },
  },
  {
    ocr: {
      name: '심도섭',
      jumin: '691224-1348011',
      issued_date: '2022.02.07',
      region: '강원지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060216_953/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060216_953/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060216_953/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 16,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '14-94-601345-62',
        driver_serial: 'S7178M',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '44643319862b947e9a2ca11656309737',
    },
  },
  {
    ocr: {
      name: '김병준',
      jumin: '820613-1169515',
      issued_date: '2016.07.14',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060218_974/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060218_974/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060218_974/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 17,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '13-99-679768-00',
        driver_serial: 'PEW9NY',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '145175102362b947ec28ca11656309740',
    },
  },
  {
    ocr: {
      name: '김연욱',
      jumin: '771015-1052417',
      issued_date: '2000.04.15',
      region: '서울특별시 서초구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060221_422/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060221_422/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060221_422/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 16,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '71596922462b947ee42e8f1656309742',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '김재형',
      jumin: '770919-1162810',
      issued_date: '2020.02.04',
      region: '서울특별시 동대문구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060226_058/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060226_058/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060226_058/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '1050431062b947f2e1b351656309746',
    },
  },
  {
    ocr: {
      name: '김혜란',
      jumin: '810615-2461013',
      issued_date: '2015.07.21',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060228_928/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060228_928/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060228_928/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-15-231971-10',
        driver_serial: 'F78W88',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '124869796162b947f59808c1656309749',
    },
  },
  {
    ocr: {
      name: '김윤정',
      jumin: '871104-2091015',
      issued_date: '2016.06.03',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060231_056/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060231_056/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060231_056/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-16-036301-40',
        driver_serial: 'U71UN9',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '14497974262b947f7b8a071656309751',
    },
  },
  {
    ocr: {
      name: '주옥경',
      jumin: '771215-2348315',
      issued_date: '2017.12.08',
      region: '경북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060233_094/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060233_094/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060233_094/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '19-10-010105-66',
        driver_serial: 'SU91V7',
      },
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '장점철',
      jumin: '820426-1114026',
      issued_date: '2008.05.14',
      region: '서울특별시 동대문구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060237_092/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060237_092/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060237_092/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '73928583262b947fdc9ef11656309757',
    },
  },
  {
    ocr: {
      name: '장한나',
      jumin: '870708-2162122',
      issued_date: '2012.08.09',
      region: '경기도 수원시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060239_577/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060239_577/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060239_577/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '204474583162b94800368361656309760',
    },
  },
  {
    ocr: {
      name: '이종윤',
      jumin: '750629-1110017',
      issued_date: '2014.04.28',
      region: '울산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060241_862/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060241_862/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060241_862/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '',
        driver_serial: 'U946UR',
      },
    },
  },
  {
    ocr: {
      name: '오유리',
      jumin: '800530-2462713',
      issued_date: '2009.02.23',
      region: '인천광역시 계양구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060242_944/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060242_944/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060242_944/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '104000772062b94803a148c1656309763',
    },
  },
  {
    ocr: {
      name: '김혜정',
      jumin: '790801-2790018',
      issued_date: '2020.11.23',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060245_422/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060245_422/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060245_422/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종대형, 1종보통',
        driver_number: '22-02-059266-80',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '186896903062b948062f7b91656309766',
    },
  },
  {
    ocr: {
      name: '장이정',
      jumin: '900511-2080016',
      issued_date: '2010.07.13',
      region: '인천광역시 서구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060247_531/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060247_531/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060247_531/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '158004315462b948086fc7d1656309768',
    },
  },
  {
    ocr: {
      name: '서미량',
      jumin: '771016-2648724',
      issued_date: '',
      region: '대전광역시 동구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060250_374/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060250_374/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060250_374/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 28,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: false,
      message: 'Issue date is invalid',
      error_code: 'A002',
      transaction_id: '33160704862b9480b326ea1656309771',
    },
  },
  {
    ocr: {
      name: '김수현',
      jumin: '750113-2026224',
      issued_date: '2016.04.21',
      region: '서울특별시 용산구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060251_458/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060251_458/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060251_458/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '89058794062b9480c481291656309772',
    },
  },
  {
    ocr: {
      name: '이광형',
      jumin: '740215-1029630',
      issued_date: '2013.01.31',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060254_070/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060254_070/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060254_070/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 27,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '서울 94-892629-20',
        driver_serial: 'O947AP',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '58847140562b9480f032e01656309775',
    },
  },
  {
    ocr: {
      name: '이현석',
      jumin: '680818-1256610',
      issued_date: '2009.06.29',
      region: '인천광역시 서구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060256_329/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060256_329/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060256_329/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '156880317662b948116c0061656309777',
    },
  },
  {
    ocr: {
      name: '이상은',
      jumin: '700224-2005922',
      issued_date: '2016.04.05',
      region: '경기도 용인시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060259_275/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060259_275/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060259_275/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 18,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '21859119562b948141100c1656309780',
    },
  },
  {
    ocr: {
      name: '김승용',
      jumin: '760605-1067421',
      issued_date: '2019.05.14',
      region: '경기도 안양시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060301_843/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060301_843/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060301_843/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 29,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '70722262162b94816daaa81656309782',
    },
  },
  {
    ocr: {
      name: '정남일',
      jumin: '530902-1630515',
      issued_date: '2021.05.13',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060304_588/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060304_588/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060304_588/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '18-21-607352-10',
        driver_serial: 'G6FE98',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '162916743162b948196a9531656309785',
    },
  },
  {
    ocr: {
      name: '오정아',
      jumin: '750612-2063437',
      issued_date: '2014.07.28',
      region: '경기지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060306_717/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060306_717/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060306_717/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 18,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '13-95-050958-71',
        driver_serial: 'P8J5UP',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '186796486462b9481b6ab9b1656309787',
    },
  },
  {
    ocr: {
      name: '김권수',
      jumin: '860415-1927913',
      issued_date: '2012.10.08',
      region: '부산광역시 북구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060308_581/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060308_581/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060308_581/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 27,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '82167809962b9481d574af1656309789',
    },
  },
  {
    ocr: {
      name: '채영임',
      jumin: '600303-2547624',
      issued_date: '2000.02.07',
      region: '전라북도 익산시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060311_532/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060311_532/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060311_532/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '82857644562b948205e9761656309792',
    },
  },
  {
    ocr: {
      name: '강민구',
      jumin: '871112-1170120',
      issued_date: '2017.05.08',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060314_033/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060314_033/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060314_033/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-07-055341-11',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '186363809362b948229b22b1656309794',
    },
  },
  {
    ocr: {
      name: '심회도',
      jumin: '720224-1273616',
      issued_date: '2008.02.19',
      region: '경기도 평택시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060315_906/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060315_906/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060315_906/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
  },
  {
    ocr: {
      name: '이정우',
      jumin: '810506-1070616',
      issued_date: '2010.10.13',
      region: '강원도 춘천시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060318_790/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060318_790/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060318_790/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '86033735862b94827a2ba81656309799',
    },
  },
  {
    ocr: {
      name: '김수진',
      jumin: '851231-2927214',
      issued_date: '2008.02.26',
      region: '경상남도 거창군수',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060321_795/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060321_795/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060321_795/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 27,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '194890403362b9482aba2db1656309802',
    },
  },
  {
    ocr: {
      name: '안성권',
      jumin: '720208-1110827',
      issued_date: '2017.05.08',
      region: '경기도 용인시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060324_573/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060324_573/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060324_573/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '97880362762b9482d8d7a81656309805',
    },
  },
  {
    ocr: {
      name: '이희택',
      jumin: '720611-1474411',
      issued_date: '2019.05.16',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060327_300/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060327_300/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060327_300/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '16-12-632992-11',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '60579366062b9482fead601656309807',
    },
  },
  {
    ocr: {
      name: '',
      jumin: '871121-2157016',
      issued_date: '2008.03.20',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060329_097/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060329_097/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060329_097/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '백운영',
      jumin: '860926-1352318',
      issued_date: '2019.04.12',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060336_451/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060336_451/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060336_451/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 27,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종대형, 1종보통',
        driver_number: '11-08-630198-21',
        driver_serial: 'SG8W8U',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '200115373862b948392a26a1656309817',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '지선희',
      jumin: '610907-2273320',
      issued_date: '2010.07.22',
      region: '강원도 강릉시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060343_420/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060343_420/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060343_420/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 27,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '183325129762b9484014fcd1656309824',
    },
  },
  {
    ocr: {
      name: '나재홍',
      jumin: '820219-1652312',
      issued_date: '2014.12.15',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060345_898/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060345_898/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060345_898/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종대형, 1종보통',
        driver_number: '18-00-071115-51',
        driver_serial: 'FXWOU3',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '21153936762b94842a1c5e1656309826',
    },
  },
  {
    ocr: {
      name: '김학현',
      jumin: '860807-1235311',
      issued_date: '2015.06.24',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060347_922/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060347_922/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060347_922/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-06-215419-31',
        driver_serial: 'OOV78U',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '71702698862b94844927da1656309828',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '노경희',
      jumin: '740808-2064136',
      issued_date: '2020.09.25',
      region: '경기도 용인시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060350_686/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060350_686/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060350_686/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '16689847862b94847607be1656309831',
    },
  },
  {
    ocr: {
      name: '김현',
      jumin: '820330-1468424',
      issued_date: '2017.09.11',
      region: '경남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060353_112/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060353_112/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060353_112/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '20-03-015957-10',
        driver_serial: '92697I',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '31730001962b94849bb5b81656309833',
    },
  },
  {
    ocr: {
      name: '유승철',
      jumin: '790605-1781018',
      issued_date: '2015.11.09',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060355_211/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060355_211/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060355_211/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '19-05-615301-01',
        driver_serial: 'E6CURN',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '119525200862b9484c4196b1656309836',
    },
  },
  {
    ocr: {
      name: '박나령',
      jumin: '800502-2121316',
      issued_date: '2013.06.12',
      region: '부산광역시 동구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060357_329/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060357_329/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060357_329/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '121985322962b9484e309971656309838',
    },
  },
  {
    ocr: {
      name: '길종형',
      jumin: '770419-1243410',
      issued_date: '2015.12.28',
      region: '인천광역시 부평구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060359_950/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060359_950/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060359_950/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '112504265562b94850c73391656309840',
    },
  },
  {
    ocr: {
      name: '강창협',
      jumin: '780108-1954111',
      issued_date: '2021.07.19',
      region: '제주지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060402_462/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060402_462/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060402_462/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '21-01-003050-54',
        driver_serial: '1E9WVF',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '11177716862b9485316bc21656309843',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '유지훈',
      jumin: '790908-1532317',
      issued_date: '2017.08.08',
      region: '제주지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060407_054/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060407_054/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060407_054/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '17-02-008397-11',
        driver_serial: 'H28I7A',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '93727990262b94857b9d2b1656309847',
    },
  },
  {
    ocr: {
      name: '백종권',
      jumin: '790107-1452613',
      issued_date: '2017.06.12',
      region: '서울특별시 관악구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060408_917/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060408_917/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060408_917/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '198454090762b94859b239d1656309849',
    },
  },
  {
    ocr: {
      name: '최원형',
      jumin: '720427-2018711',
      issued_date: '2013.11.05',
      region: '경기지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060412_066/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060412_066/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060412_066/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '서울 96-019639-92',
        driver_serial: 'E78NVV',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '155669162062b9485ce02c81656309852',
    },
  },
  {
    ocr: {
      name: '김영미',
      jumin: '871220-2685022',
      issued_date: '2020.01.17',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060414_063/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060414_063/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060414_063/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '22-10-029278-30',
        driver_serial: 'V7OHIT',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '213667966962b9485ec08b41656309854',
    },
  },
  {
    ocr: {
      name: '김진만',
      jumin: '810325-1348311',
      issued_date: '2015.12.10',
      region: '충북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060415_986/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060415_986/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060415_986/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '',
        driver_number: '19-01-623699-60',
        driver_serial: 'FTD6U8',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '19631644662b94860a69ef1656309856',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '이재영',
      jumin: '880919-1408014',
      issued_date: '2017.06.12',
      region: '대전지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060419_290/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060419_290/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060419_290/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '25-10-000639-02',
        driver_serial: 'V2DOYJ',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '41401428662b94863e515f1656309859',
    },
  },
  {
    ocr: {
      name: 'CXH LIAN',
      jumin: '830527-6340192',
      issued_date: '2021.01.11',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060421_402/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060421_402/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060421_402/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '15-21-000524-20',
        driver_serial: '',
      },
    },
  },
  {
    ocr: {
      name: '오은숙',
      jumin: '620520-2818910',
      issued_date: '2011.08.02',
      region: '경상남도 창원시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060423_468/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060423_468/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060423_468/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '99520953162b948686a8b11656309864',
    },
  },
  {
    ocr: {
      name: '조아라',
      jumin: '921213-2400618',
      issued_date: '',
      region: '대전지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060426_162/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060426_162/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060426_162/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '25-14-029409-20',
        driver_serial: 'NOJVTL',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '125782803862b9486ad5ff01656309866',
    },
  },
  {
    ocr: {
      name: '황희재',
      jumin: '910730-1149214',
      issued_date: '2014.06.02',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060428_467/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060428_467/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060428_467/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '서울 10-061967-10',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '92484358762b9486d52f471656309869',
    },
  },
  {
    ocr: {
      name: '정재성',
      jumin: '751004-1659416',
      issued_date: '',
      region: '경기도 양주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060430_860/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060430_860/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060430_860/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: false,
      message: 'Issue date is invalid',
      error_code: 'A002',
      transaction_id: '179579319562b9486fc48131656309871',
    },
  },
  {
    ocr: {
      name: '한미선',
      jumin: '790901-2080418',
      issued_date: '2008.10.06',
      region: '서울특별시 은평구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060432_205/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060432_205/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060432_205/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 27,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '66689716962b94870e6d611656309872',
    },
  },
  {
    ocr: {
      name: '김정배',
      jumin: '650903-1226161',
      issued_date: '2013.04.30',
      region: '대구광역시 중구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060434_864/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060434_864/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060434_864/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '108878766762b94873b51421656309875',
    },
  },
  {
    ocr: {
      name: '권종칠',
      jumin: '890429-1770110',
      issued_date: '2014.08.07',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060437_711/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060437_711/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060437_711/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 19,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '22-14-041453-90',
        driver_serial: 'Q68Q6G',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '8275297162b94876522fd1656309878',
    },
  },
  {
    ocr: {
      name: '이효석',
      jumin: '680205-1455421',
      issued_date: '2016.04.07',
      region: '대전지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060439_560/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060439_560/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060439_560/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 18,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '15-93-003506-11',
        driver_serial: 'DW0X8V',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '4771533262b948785a86d1656309880',
    },
  },
  {
    ocr: {
      name: '문훈',
      jumin: '671030-1057619',
      issued_date: '2021.11.03',
      region: '서울특별시경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060441_650/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060441_650/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060441_650/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '11-92-693724-72',
        driver_serial: '8O2SOE',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '113107433562b9487a6f7a01656309882',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '원혜선',
      jumin: '800909-2224915',
      issued_date: '2017.07.19',
      region: '강원지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060445_538/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060445_538/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060445_538/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '14-17-206823-60',
        driver_serial: '2XI6P3',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '99479388362b9487e2f0331656309886',
    },
  },
  {
    ocr: {
      name: '김귀연',
      jumin: '810222-2696811',
      issued_date: '2017.08.21',
      region: '충남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060447_582/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060447_582/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060447_582/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '22-08-010297-41',
        driver_serial: 'UER2VC',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '109817704062b94880430501656309888',
    },
  },
  {
    ocr: {
      name: '이은희',
      jumin: '820417-2148112',
      issued_date: '2013.04.15',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060449_518/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060449_518/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060449_518/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '인천 05-046188-21',
        driver_serial: '555HID',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '147352290062b948822d7261656309890',
    },
  },
  {
    ocr: {
      name: '방영아',
      jumin: '670426-2347515',
      issued_date: '2015.10.07',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060451_374/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060451_374/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060451_374/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-96-691490-30',
        driver_serial: 'EU2Z9P',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '193916840362b948841d6b01656309892',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '박창호',
      jumin: '751028-1641429',
      issued_date: '2020.01.30',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060454_568/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060454_568/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060454_568/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '18-98-033156-81',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '3420238962b948874db3d1656309895',
    },
  },
  {
    ocr: {
      name: '조정훈',
      jumin: '800620-1080716',
      issued_date: '2018.07.05',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060456_828/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060456_828/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060456_828/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '13-00-615644-12',
        driver_serial: 'E72O61',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '53900038162b9488993caf1656309897',
    },
  },
  {
    ocr: {
      name: '이동원',
      jumin: '740626-1168114',
      issued_date: '2012.11.19',
      region: '경기도 성남시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060458_845/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060458_845/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060458_845/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '197995521362b9488b954831656309899',
    },
  },
  {
    ocr: {
      name: '남윤희',
      jumin: '790123-2231725',
      issued_date: '2003.11.01',
      region: '경기도 광명시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060501_322/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060501_322/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060501_322/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '37167451962b9488e2f71e1656309902',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '정미영',
      jumin: '810801-2037017',
      issued_date: '2015.08.10',
      region: '경기도 용인시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060504_828/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060504_828/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060504_828/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 27,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '92395147162b948917eb8a1656309905',
    },
  },
  {
    ocr: {
      name: '김영각',
      jumin: '810320-1781311',
      issued_date: '2010.07.08',
      region: '경상북도 영덕군수',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060507_267/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060507_267/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060507_267/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '121353295062b94893e24691656309907',
    },
  },
  {
    ocr: {
      name: '손한근',
      jumin: '720224-1790311',
      issued_date: '2020.07.21',
      region: '경기도 부천시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060509_680/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060509_680/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060509_680/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
  },
  {
    ocr: {
      name: '손민성',
      jumin: '820619-1786213',
      issued_date: '2015.05.11',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060512_195/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060512_195/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060512_195/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '19-01-600483-52',
        driver_serial: 'ZPF8SG',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '197636428662b94898db07a1656309912',
    },
  },
  {
    ocr: {
      name: '김종식',
      jumin: '740525-1889411',
      issued_date: '2018.01.15',
      region: '경남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060514_134/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060514_134/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060514_134/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종대형, 1종보통',
        driver_number: '20-13-018013-91',
        driver_serial: 'DH2E60',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '178426084962b9489adb4351656309914',
    },
  },
  {
    ocr: {
      name: '김선영',
      jumin: '770107-2226724',
      issued_date: '2008.03.17',
      region: '경기도 안성시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060516_342/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060516_342/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060516_342/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '159184275162b9489d09cf51656309917',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '강현묵',
      jumin: '800812-1483217',
      issued_date: '2022.03.29',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060520_487/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060520_487/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060520_487/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '17-22-009009-60',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '161706998762b948a16fa231656309921',
    },
  },
  {
    ocr: {
      name: '허범식',
      jumin: '690506-1392315',
      issued_date: '2016.02.04',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060522_674/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060522_674/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060522_674/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '11-88-040063-10',
        driver_serial: 'V7RGPO',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '105764841662b948a37b5361656309923',
    },
  },
  {
    ocr: {
      name: '이주원',
      jumin: '720104-2148219',
      issued_date: '2016.01.27',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060524_692/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060524_692/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060524_692/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '23-97-033611-01',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '109919320662b948a585f961656309925',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '김종현',
      jumin: '810317-1002012',
      issued_date: '2016.05.30',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060528_010/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060528_010/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060528_010/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-00-224864-24',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '11952232662b948a8c42841656309928',
    },
  },
  {
    ocr: {
      name: '김세잔',
      jumin: '840521-1076446',
      issued_date: '2019.02.07',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060530_022/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060530_022/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060530_022/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '13-06-636129-52',
        driver_serial: 'D9UEGU',
      },
    },
  },
  {
    ocr: {
      name: '설재민',
      jumin: '921220-2495718',
      issued_date: '2010.01.27',
      region: '전라북도 익산시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060532_347/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060532_347/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060532_347/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
  },
  {
    ocr: {
      name: '강승규',
      jumin: '880819-1125114',
      issued_date: '2015.08.06',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060534_702/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060534_702/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060534_702/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '12-08-623583-50',
        driver_serial: '8O9I9P',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '185940453862b948af687091656309935',
    },
  },
  {
    ocr: {
      name: '광재',
      jumin: '771128-1268317',
      issued_date: '2003.10.28',
      region: '강원도 원주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060536_705/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060536_705/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060536_705/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
  },
  {
    ocr: {
      name: '이수용',
      jumin: '860302-1717718',
      issued_date: '2003.09.25',
      region: '경상북도 김천시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060539_337/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060539_337/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060539_337/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '213747420262b948b43fb741656309940',
    },
  },
  {
    ocr: {
      name: '진재원',
      jumin: '890817-1110312',
      issued_date: '2015.11.02',
      region: '경상남도 창원시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060542_038/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060542_038/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060542_038/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '8859610762b948b6d6d0a1656309942',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '김준홍',
      jumin: '840731-1682639',
      issued_date: '2018.07.02',
      region: '전북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060546_955/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060546_955/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060546_955/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종대형, 1종보통',
        driver_number: '22-03-003992-90',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '144590427062b948bbb48c71656309947',
    },
  },
  {
    ocr: {
      name: '김진수',
      jumin: '900103-1550617',
      issued_date: '2016.03.17',
      region: '경기도 성남시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060549_298/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060549_298/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060549_298/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '14712463762b948be2b21b1656309950',
    },
  },
  {
    ocr: {
      name: '김민지',
      jumin: '920303-2114016',
      issued_date: '2012.08.29',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060551_901/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060551_901/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060551_901/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '전남 12-067533-00',
        driver_serial: '7223ZO',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '111172073962b948c08bcbd1656309952',
    },
  },
  {
    ocr: {
      name: '이은영',
      jumin: '710608-2663511',
      issued_date: '',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060553_795/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060553_795/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060553_795/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '16-00-623695-30',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '22557304162b948c264da71656309954',
    },
  },
  {
    ocr: {
      name: '김성권',
      jumin: '871007-1389911',
      issued_date: '2013.02.15',
      region: '충북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060555_599/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060555_599/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060555_599/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '',
        driver_serial: '7O31RP',
      },
    },
  },
  {
    ocr: {
      name: '이보미',
      jumin: '801012-2522710',
      issued_date: '2000.02.13',
      region: '전라북도 전주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060556_738/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060556_738/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060556_738/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '19570216762b948c5730f11656309957',
    },
  },
  {
    ocr: {
      name: '김석원',
      jumin: '921016-1780819',
      issued_date: '2015.08.05',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060559_092/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060559_092/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060559_092/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '22-15-045933-00',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '20124677762b948c7d09d91656309959',
    },
  },
  {
    ocr: {
      name: '전종윤',
      jumin: '700803-1411814',
      issued_date: '2020.01.16',
      region: '충청남도 천안시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060601_204/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060601_204/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060601_204/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '121917125862b948c9c78cb1656309961',
    },
  },
  {
    ocr: {
      name: '성금희',
      jumin: '691007-2631918',
      issued_date: '2016.12.21',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060603_515/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060603_515/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060603_515/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-96-611538-50',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '122869031162b948cc354131656309964',
    },
  },
  {
    ocr: {
      name: '백남승',
      jumin: '790130-1675015',
      issued_date: '2015.07.21',
      region: '대구광역시 동구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060605_506/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060605_506/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060605_506/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '210731280262b948ce4daf01656309966',
    },
  },
  {
    ocr: {
      name: '이철환',
      jumin: '690818-1005524',
      issued_date: '2017.01.09',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060607_961/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060607_961/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060607_961/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-17-801354-60',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '157956551762b948d084fa11656309968',
    },
  },
  {
    ocr: {
      name: '',
      jumin: '790910-1067912',
      issued_date: '2021.05.17',
      region: '경기도남부경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060609_897/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060609_897/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060609_897/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-07-005153-12',
        driver_serial: '',
      },
    },
  },
  {
    ocr: {
      name: '이완전',
      jumin: '631025-2548711',
      issued_date: '2016.02.22',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060610_813/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060610_813/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060610_813/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-16-210399-10',
        driver_serial: '6W971D',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '146214724262b948d37e8161656309971',
    },
  },
  {
    ocr: {
      name: '진삼봉',
      jumin: '790225-1637523',
      issued_date: '2019.09.30',
      region: '충청남도 천안시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060612_604/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060612_604/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060612_604/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '24685895362b948d562cdb1656309973',
    },
  },
  {
    ocr: {
      name: '황태성',
      jumin: '860129-1829311',
      issued_date: '2019.10.28',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060615_001/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060615_001/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060615_001/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '20-04-013360-94',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '126378528762b948d78d0dc1656309975',
    },
  },
  {
    ocr: {
      name: '김주희',
      jumin: '750909-2768316',
      issued_date: '2016.03.24',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060616_878/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060616_878/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060616_878/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '19-01-052076-80',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '114174614262b948d96b01c1656309977',
    },
  },
  {
    ocr: {
      name: '강지민',
      jumin: '860627-1351414',
      issued_date: '2021.07.07',
      region: '서울특별시경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060618_628/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060618_628/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060618_628/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '15-08-012012-42',
        driver_serial: 'F680DA',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '4329125362b948db4bda41656309979',
    },
  },
  {
    ocr: {
      name: '오승현',
      jumin: '930228-1932511',
      issued_date: '2011.07.06',
      region: '제주특별자치도지사',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060620_472/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060620_472/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060620_472/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '33700691562b948dcf16791656309980',
    },
  },
  {
    ocr: {
      name: '문선웅',
      jumin: '801206-1543316',
      issued_date: '2018.09.20',
      region: '전라북도 임실군수',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060623_658/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060623_658/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060623_658/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 17,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '170694732362b948e036ae01656309984',
    },
  },
  {
    ocr: {
      name: '한소정',
      jumin: '821210-2547411',
      issued_date: '2016.12.12',
      region: '전북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060625_851/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060625_851/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060625_851/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '17-02-051919-11',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '129441902062b948e26e9811656309986',
    },
  },
  {
    ocr: {
      name: '염동진',
      jumin: '890506-1074613',
      issued_date: '2019.04.29',
      region: '제주지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060627_629/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060627_629/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060627_629/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '14-07-207457-73',
        driver_serial: '171E8H',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '174525288262b948e430e881656309988',
    },
  },
  {
    ocr: {
      name: '황재욱',
      jumin: '800227-1167417',
      issued_date: '2012.10.16',
      region: '경기도 성남시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060629_447/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060629_447/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060629_447/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '172470148662b948e6211861656309990',
    },
  },
  {
    ocr: {
      name: '김영미',
      jumin: '671023-2347732',
      issued_date: '2016.04.25',
      region: '경북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060631_829/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060631_829/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060631_829/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '14-92-603460-91',
        driver_serial: 'FEHGVG',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '169567088262b948e862ec31656309992',
    },
  },
  {
    ocr: {
      name: '김영순',
      jumin: '611030-2526519',
      issued_date: '2012.07.23',
      region: '대구광역시 남구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060633_502/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060633_502/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060633_502/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '116325742462b948ea411a51656309994',
    },
  },
  {
    ocr: {
      name: '이진경',
      jumin: '901006-2555415',
      issued_date: '2016.08.18',
      region: '경북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060635_853/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060635_853/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060635_853/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '18-09-027117-30',
        driver_serial: 'O7S88D',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '120455552662b948ec7121e1656309996',
    },
  },
  {
    ocr: {
      name: '김진',
      jumin: '701219-2567514',
      issued_date: '2003.08.26',
      region: '경상남도 창원시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060637_609/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060637_609/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060637_609/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '15012092362b948ee8ad1f1656309998',
    },
  },
  {
    ocr: {
      name: '원재연',
      jumin: '871018-1787612',
      issued_date: '2005.02.21',
      region: '대구광역시 수성구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060640_200/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060640_200/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060640_200/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '25506194562b948f1063e81656310001',
    },
  },
  {
    ocr: {
      name: '한동일',
      jumin: '711228-1543418',
      issued_date: '2017.05.25',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060642_661/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060642_661/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060642_661/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '17-93-041896-01',
        driver_serial: '9H9WWB',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '150728994362b948f349e701656310003',
    },
  },
  {
    ocr: {
      name: '김미자',
      jumin: '710630-2468428',
      issued_date: '2017.09.25',
      region: '전북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060644_534/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060644_534/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060644_534/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '17-10-008680-11',
        driver_serial: 'JIERSE',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '184836259662b948f51c0e91656310005',
    },
  },
  {
    ocr: {
      name: '이지수',
      jumin: '751216-2231313',
      issued_date: '',
      region: '경기도 김포시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060651_323/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060651_323/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060651_323/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 27,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: false,
      message: 'Issue date is invalid',
      error_code: 'A002',
      transaction_id: '15343553962b948fc8fc051656310012',
    },
  },
  {
    ocr: {
      name: '황소라',
      jumin: '910613-2403618',
      issued_date: '',
      region: '대전지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060652_818/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060652_818/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060652_818/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 0,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '25-17-018988-52',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '61292208962b948fd868781656310013',
    },
  },
  {
    ocr: {
      name: '한혜란',
      jumin: '790813-2170012',
      issued_date: '2021.12.30',
      region: '경기도남부경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060655_025/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060655_025/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060655_025/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '13-03-664371-51',
        driver_serial: '1GF7U7',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '138367108262b948ff963271656310015',
    },
  },
  {
    ocr: {
      name: '심수현',
      jumin: '780223-2156911',
      issued_date: '2016.07.04',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060656_774/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060656_774/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060656_774/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '23-01-060375-80',
        driver_serial: '0022WX',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '90316576362b94901694e81656310017',
    },
  },
  {
    ocr: {
      name: '김승규',
      jumin: '751015-1927517',
      issued_date: '2022.03.23',
      region: '서울특별시경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060658_652/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060658_652/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060658_652/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-98-006525-22',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '83871486562b94903458601656310019',
    },
  },
  {
    ocr: {
      name: '신미진',
      jumin: '771103-2481910',
      issued_date: '2015.02.16',
      region: '전북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060700_570/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060700_570/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060700_570/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 27,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '17-15-007796-90',
        driver_serial: 'DEBBHD',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '159693456262b94905324d61656310021',
    },
  },
  {
    ocr: {
      name: '소용우',
      jumin: '850911-1823512',
      issued_date: '2018.06.20',
      region: '경남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060702_315/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060702_315/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060702_315/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종대형, 1종보통',
        driver_number: '20-03-059182-00',
        driver_serial: '',
      },
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '정우현',
      jumin: '741120-1804324',
      issued_date: '2017.04.07',
      region: '경북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060705_965/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060705_965/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060705_965/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '19-93-021855-31',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '51320059962b9490a8277b1656310026',
    },
  },
  {
    ocr: {
      name: '상덕현',
      jumin: '810304-1232816',
      issued_date: '2019.03.22',
      region: '경남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060707_649/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060707_649/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060707_649/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종대형',
        driver_number: '20-11-041254-01',
        driver_serial: '5XGUUJ',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '91788965462b9490c45c471656310028',
    },
  },
  {
    ocr: {
      name: '채승진',
      jumin: '841128-1055619',
      issued_date: '2020.01.28',
      region: '경기도 평택시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060709_633/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060709_633/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060709_633/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '186807381062b9490e2fc0f1656310030',
    },
  },
  {
    ocr: {
      name: '봉성희',
      jumin: '770710-2168919',
      issued_date: '2013.07.11',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060711_828/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060711_828/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060711_828/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '서울 03-062955-50',
        driver_serial: 'U998PJ',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '123337258062b949106f3871656310032',
    },
  },
  {
    ocr: {
      name: '홍정표',
      jumin: '760121-1255414',
      issued_date: '2010.04.22',
      region: '인천광역시 강화군수',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060713_641/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060713_641/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060713_641/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '24704032062b949124c4101656310034',
    },
  },
  {
    ocr: {
      name: '장석원',
      jumin: '840727-1233219',
      issued_date: '2021.10.19',
      region: '서울특별시경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060716_068/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060716_068/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060716_068/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 18,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-21-240409-20',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '58415689762b94914950071656310036',
    },
  },
  {
    ocr: {
      name: '나지혜',
      jumin: '831214-2156812',
      issued_date: '2018.02.13',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060717_806/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060717_806/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060717_806/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 20,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종대형, 1종보통, 2종보통',
        driver_number: '23-03-066148-20',
        driver_serial: '121JD4',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '32798705262b94916747b91656310038',
    },
  },
  {
    ocr: {
      name: '박건휘',
      jumin: '920303-1024831',
      issued_date: '2009.09.03',
      region: '경기도 고양시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060719_714/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060719_714/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060719_714/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '154098146762b949183c5891656310040',
    },
  },
  {
    ocr: {
      name: '김혜리',
      jumin: '860620-2824418',
      issued_date: '2018.02.05',
      region: '경남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060721_850/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060721_850/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060721_850/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '20-08-030146-10',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '183797735862b9491a675871656310042',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '심정경',
      jumin: '800913-2460413',
      issued_date: '2019.06.17',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060724_302/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060724_302/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060724_302/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '23-01-005424-31',
        driver_serial: 'VUENOE',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '20967422962b9491ceea411656310044',
    },
  },
  {
    ocr: {
      name: '김민성',
      jumin: '850410-1300717',
      issued_date: '2002.09.02',
      region: '강원도 동해시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060726_409/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060726_409/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060726_409/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '130806023362b9491f48e951656310047',
    },
  },
  {
    ocr: {
      name: '남현우',
      jumin: '831223-1148523',
      issued_date: '2021.04.26',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060729_229/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060729_229/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060729_229/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '23-03-002436-22',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '83000977262b94921c20c31656310049',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '권정도',
      jumin: '741012-1114611',
      issued_date: '2013.04.09',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060733_730/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060733_730/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060733_730/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '부산 05-029255-70',
        driver_serial: 'O941RP',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '187692280262b9492654f611656310054',
    },
  },
  {
    ocr: {
      name: '리민절',
      jumin: '880206-1172734',
      issued_date: '2018.08.16',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060735_458/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060735_458/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060735_458/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통, 2종보통, 2종소형',
        driver_number: '13-08-034695-40',
        driver_serial: 'VUROOO',
      },
    },
  },
  {
    ocr: {
      name: '윤옥정',
      jumin: '761102-2675411',
      issued_date: '2019.02.26',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060737_596/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060737_596/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060737_596/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '22-99-009267-10',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '106401295162b9492a333e91656310058',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '마애란',
      jumin: '710214-2340425',
      issued_date: '2017.08.11',
      region: '경기북부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060742_898/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060742_898/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060742_898/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '14-93-016127-30',
        driver_serial: 'H6UDD7',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '198645102962b9492f877d11656310063',
    },
  },
  {
    ocr: {
      name: '안수혜',
      jumin: '811005-2690911',
      issued_date: '2018.09.18',
      region: '대전지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060745_110/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060745_110/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060745_110/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '19-00-013743-53',
        driver_serial: 'UUUV77',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '88207535762b94931a66091656310065',
    },
  },
  {
    ocr: {
      name: '최석민',
      jumin: '791129-1057129',
      issued_date: '2020.04.13',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060746_894/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060746_894/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060746_894/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-04-228369-03',
        driver_serial: 'U9779U',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '129468202962b9493373e761656310067',
    },
  },
  {
    ocr: {
      name: '김현정',
      jumin: '800520-2893013',
      issued_date: '2010.06.07',
      region: '경상남도 의령군수',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060748_766/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060748_766/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060748_766/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '9030122162b94935bcab61656310069',
    },
  },
  {
    ocr: {
      name: '강민환',
      jumin: '780729-1470622',
      issued_date: '2014.10.06',
      region: '대전지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060751_475/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060751_475/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060751_475/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '25-14-028309-80',
        driver_serial: 'E4OYWI',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '182355310462b94938180321656310072',
    },
  },
  {
    ocr: {
      name: '문명은',
      jumin: '830207-2019420',
      issued_date: '2020.09.22',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060753_226/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060753_226/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060753_226/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-20-045468-10',
        driver_serial: 'O5T7U5',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '90845047862b94939e75761656310073',
    },
  },
  {
    ocr: {
      name: '김미영',
      jumin: '861111-2382411',
      issued_date: '2009.05.15',
      region: '서울특별시 마포구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060755_166/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060755_166/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060755_166/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 25,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '157659547362b9493bb9e6c1656310075',
    },
  },
  {
    ocr: {
      name: '백민희',
      jumin: '821119-2010019',
      issued_date: '2009.08.31',
      region: '서울특별시 동대문구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060757_974/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060757_974/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060757_974/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '34372653762b9493e95d2c1656310078',
    },
  },
  {
    ocr: {
      name: '박원정',
      jumin: '731005-1403118',
      issued_date: '2021.12.21',
      region: '세종특별자치시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060800_598/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060800_598/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060800_598/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '181476059062b9494158a551656310081',
    },
  },
  {
    ocr: {
      name: '최규환',
      jumin: '640606-1025425',
      issued_date: '2011.12.22',
      region: '서울특별시 서초구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060803_158/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060803_158/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060803_158/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '82474089362b94943f20e21656310083',
    },
  },
  {
    ocr: {
      name: '백윤희',
      jumin: '880226-2000914',
      issued_date: '2014.12.18',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060805_721/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060805_721/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060805_721/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-14-674611-00',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '3636457962b949464c3251656310086',
    },
  },
  {
    ocr: {
      name: '박희안',
      jumin: '780818-1005819',
      issued_date: '2004.12.07',
      region: '서울특별시 광진구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060807_604/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060807_604/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060807_604/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 24,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '28546958762b9494845e2d1656310088',
    },
  },
  {
    ocr: {
      name: '손은정',
      jumin: '791202-2326014',
      issued_date: '',
      region: '강원지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060810_947/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060810_947/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060810_947/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: { driver_type: '', driver_number: '', driver_serial: '' },
    },
  },
  {
    ocr: {
      name: '허은미',
      jumin: '661031-2010315',
      issued_date: '',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060812_072/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060812_072/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060812_072/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '',
        driver_serial: '',
      },
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '조세원',
      jumin: '950614-2624010',
      issued_date: '2019.09.24',
      region: '광주광역시 북구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060814_166/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060814_166/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060814_166/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '186134908862b9494f326261656310095',
    },
  },
  {
    ocr: {
      name: '노범구',
      jumin: '740223-1094713',
      issued_date: '2004.06.03',
      region: '부산광역시 사하구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060816_836/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060816_836/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060816_836/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '64184174162b949516d48a1656310097',
    },
  },
  {
    ocr: {
      name: '조형준',
      jumin: '740110-1683125',
      issued_date: '2016.06.09',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060819_056/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060819_056/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060819_056/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '22-96-065040-04',
        driver_serial: 'DD680L',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '128053441362b94953963e41656310099',
    },
  },
  {
    ocr: {
      name: '박현석',
      jumin: '751003-1148722',
      issued_date: '2012.04.05',
      region: '경기지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060820_841/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060820_841/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060820_841/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '서울 94-250745-42',
        driver_serial: '1923RP',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '140308468262b949557cbf21656310101',
    },
  },
  {
    ocr: {
      name: '박민철',
      jumin: '810320-1124911',
      issued_date: '2016.01.27',
      region: '부산광역시 남구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060822_703/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060822_703/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060822_703/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '46112357862b94957757f21656310103',
    },
  },
  {
    ocr: {
      name: '정상훈',
      jumin: '760412-1178416',
      issued_date: '2013.12.05',
      region: '경기지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060825_050/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060825_050/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060825_050/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '경기 99-647785-81',
        driver_serial: 'E728N2',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '210377116962b94959a74061656310105',
    },
  },
  {
    ocr: {
      name: '장지용',
      jumin: '910806-1400611',
      issued_date: '2012.01.05',
      region: '충남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060827_027/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060827_027/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060827_027/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '',
        driver_number: '25-10-034290-80',
        driver_serial: '0O71H7',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '47906692462b9495ba8f551656310107',
    },
  },
  {
    ocr: {
      name: '백진이',
      jumin: '800913-2163222',
      issued_date: '2014.12.17',
      region: '강원지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060828_791/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060828_791/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060828_791/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '14-04-212409-91',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '30426262562b9495d58f491656310109',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '정성윤',
      jumin: '771002-1790017',
      issued_date: '2017.03.17',
      region: '경북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060831_477/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060831_477/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060831_477/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통, 원동기',
        driver_number: '22-97-032631-81',
        driver_serial: '7B99FV',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '108667409862b949604d10e1656310112',
    },
  },
  {
    ocr: {
      name: '소용채',
      jumin: '791212-1768619',
      issued_date: '2016.05.17',
      region: '경남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060833_481/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060833_481/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060833_481/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '19-95-067519-01',
        driver_serial: '7V8E7F',
      },
    },
  },
  {
    ocr: {
      name: '정영아',
      jumin: '691224-2448912',
      issued_date: '2011.11.30',
      region: '인천광역시 서구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060835_306/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060835_306/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060835_306/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '28821792262b94964274871656310116',
    },
  },
  {
    ocr: {
      name: '권동욱',
      jumin: '980419-1865421',
      issued_date: '2018.07.09',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060837_925/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060837_925/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060837_925/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '12-18-015025-40',
        driver_serial: 'R2I16R',
      },
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '김인기',
      jumin: '781105-1568011',
      issued_date: '2000.04.26',
      region: '전라남도 목포시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060841_181/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060841_181/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060841_181/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '18392763462b94969c4c031656310121',
    },
  },
  {
    ocr: {
      name: '조미옥',
      jumin: '780714-2120520',
      issued_date: '2019.03.22',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060843_372/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060843_372/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060843_372/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '12-09-635034-90',
        driver_serial: 'G796ZC',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '20315563962b9496beb4411656310123',
    },
  },
  {
    ocr: {
      name: '김영욱',
      jumin: '820509-1169218',
      issued_date: '2014.03.21',
      region: '경기지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060845_207/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060845_207/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060845_207/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '경기 04-051355-61',
        driver_serial: 'SDVR2P',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '11791384262b9496dd543e1656310125',
    },
  },
  {
    ocr: {
      name: '공민수',
      jumin: '651231-2117119',
      issued_date: '2013.08.05',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060847_138/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060847_138/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060847_138/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '부산 89-029684-61',
        driver_serial: '687GFU',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '54490430862b9496fc234d1656310127',
    },
  },
  {
    ocr: {
      name: '정용섭',
      jumin: '690811-1221130',
      issued_date: '2016.06.20',
      region: '경기도 동두천시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060849_145/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060849_145/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060849_145/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '142183314462b94971d42bc1656310129',
    },
  },
  {
    ocr: {
      name: '이영우',
      jumin: '820621-1081316',
      issued_date: '2016.04.25',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060851_443/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060851_443/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060851_443/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '13-02-613237-60',
        driver_serial: 'HRWUWG',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '99656568662b94973f29631656310131',
    },
  },
  {
    ocr: {
      name: '소찬종',
      jumin: '681128-1916612',
      issued_date: '',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060853_308/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060853_308/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060853_308/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '20-89-008307-21',
        driver_serial: '',
      },
    },
  },
  {
    ocr: {
      name: '김재형',
      jumin: '770919-1162810',
      issued_date: '2020.02.04',
      region: '서울특별시 동대문구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060855_066/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060855_066/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060855_066/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '118502118562b949781cbcb1656310136',
    },
  },
  {
    ocr: {
      name: '최영진',
      jumin: '790515-1048215',
      issued_date: '',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060857_711/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060857_711/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060857_711/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: { driver_type: '', driver_number: '', driver_serial: '' },
    },
  },
  {
    ocr: {
      name: '이지연',
      jumin: '800220-2532320',
      issued_date: '2016.10.05',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060859_275/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060859_275/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060859_275/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '17-00-004775-20',
        driver_serial: '128VF5',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '39470148362b9497be8a141656310139',
    },
  },
  {
    ocr: {
      name: '김지숙',
      jumin: '861029-2659219',
      issued_date: '2014.07.04',
      region: '인천광역시 부평구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060901_605/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060901_605/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060901_605/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
  },
  {
    ocr: {
      name: '최희정',
      jumin: '740903-2235418',
      issued_date: '2015.10.08',
      region: '경기지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060904_174/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060904_174/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060904_174/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-06-219650-50',
        driver_serial: 'EXEVHL',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '108385918262b94980dfd9e1656310144',
    },
  },
  {
    ocr: {
      name: '김민철',
      jumin: '880705-1177734',
      issued_date: '2018.08.16',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060906_154/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060906_154/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060906_154/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종소형',
        driver_number: '13-08-034695-40',
        driver_serial: 'VUROOO',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '160756349262b94982cef1e1656310146',
    },
  },
  {
    ocr: {
      name: '권선영',
      jumin: '890219-2057418',
      issued_date: '2018.02.12',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060908_011/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060908_011/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060908_011/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-08-644698-60',
        driver_serial: '8V797U',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '83682796062b9498490aa91656310148',
    },
  },
  {
    ocr: {
      name: '전승호',
      jumin: '750121-1144217',
      issued_date: '2018.09.28',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060909_746/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060909_746/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060909_746/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '23-04-025199-12',
        driver_serial: 'FWR12Y',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '92745485462b94986400d41656310150',
    },
  },
  {
    ocr: {
      name: '김미정',
      jumin: '890729-2690914',
      issued_date: '2016.12.08',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060911_527/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060911_527/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060911_527/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-08-829309-00',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '99469427962b94988209ef1656310152',
    },
  },
  {
    ocr: {
      name: '',
      jumin: '750426-1545627',
      issued_date: '2018.04.06',
      region: '전북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060913_434/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060913_434/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060913_434/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '17-93-062413-51',
        driver_serial: 'HFU1GH',
      },
    },
  },
  {
    ocr: {
      name: '최순희',
      jumin: '720416-2109921',
      issued_date: '2014.09.15',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060914_585/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060914_585/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060914_585/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '12-05-015994-11',
        driver_serial: 'D79QVU',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '52097748662b9498b3bed61656310155',
    },
  },
  {
    ocr: {
      name: '김난희',
      jumin: '701104-2631616',
      issued_date: '2016.04.29',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060916_495/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060916_495/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060916_495/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '18-01-086097-81',
        driver_serial: 'VFDIIK',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '57285559762b9498d0dbf81656310157',
    },
  },
  {
    ocr: {
      name: '지정석',
      jumin: '910408-1187825',
      issued_date: '2010.07.06',
      region: '경기도 광명시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060918_248/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060918_248/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060918_248/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '권영민',
      jumin: '850509-1674819',
      issued_date: '2015.10.16',
      region: '대구광역시 동구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060923_989/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060923_989/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060923_989/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
  },
  {
    ocr: {
      name: '소재연',
      jumin: '830908-2455812',
      issued_date: '2015.09.30',
      region: '서울특별시 도봉구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060940_044/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060940_044/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060940_044/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '126630587862b949a4d94671656310180',
    },
  },
  {
    ocr: {
      name: '조다은',
      jumin: '910624-2080516',
      issued_date: '2020.06.22',
      region: '경기북부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060942_596/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060942_596/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060942_596/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '28-20-010530-10',
        driver_serial: 'F9T2DZ',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '208001668362b949a73de871656310183',
    },
  },
  {
    ocr: {
      name: '김선일',
      jumin: '751230-1545610',
      issued_date: '2014.04.24',
      region: '전북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060944_420/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060944_420/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060944_420/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '전북 14-012963-90',
        driver_serial: '91FOBU',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '36999321062b949a9086851656310185',
    },
  },
  {
    ocr: {
      name: '하수완',
      jumin: '830220-1110219',
      issued_date: '2019.05.14',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060946_169/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060946_169/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060946_169/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '12-11-634588-50',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '127089220362b949aaaf30e1656310186',
    },
  },
  {
    ocr: {
      name: '최준성',
      jumin: '860109-1642612',
      issued_date: '2011.12.23',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060948_394/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060948_394/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060948_394/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '전남 04-033369-90',
        driver_serial: '5235QP',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '162447530262b949ad0075c1656310189',
    },
  },
  {
    ocr: {
      name: '박영호',
      jumin: '711113-1400510',
      issued_date: '2017.02.09',
      region: '경남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060950_114/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060950_114/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060950_114/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '20-02-056445-93',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '83529965362b949aebbe6d1656310190',
    },
  },
  {
    ocr: {
      name: '김정원',
      jumin: '851002-2121910',
      issued_date: '2017.10.24',
      region: '부산광역시 해운대구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060952_006/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060952_006/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060952_006/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '198768882162b949b0ba28f1656310192',
    },
  },
  {
    ocr: {
      name: '김정훈',
      jumin: '740306-1042715',
      issued_date: '2017.12.12',
      region: '경기도 성남시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060954_379/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060954_379/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060954_379/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '67332163362b949b31a9e01656310195',
    },
  },
  {
    ocr: {
      name: '주진혁',
      jumin: '800716-1162217',
      issued_date: '2015.04.24',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060956_722/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060956_722/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060956_722/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '16-01-602901-31',
        driver_serial: '8DF8O6',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '77599742462b949b54801d1656310197',
    },
  },
  {
    ocr: {
      name: '손정은',
      jumin: '800307-2906318',
      issued_date: '2015.12.10',
      region: '경남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627060958_411/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627060958_411/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627060958_411/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '20-01-049049-80',
        driver_serial: 'FE992R',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '169113335362b949b7027291656310199',
    },
  },
  {
    ocr: {
      name: '서윤미',
      jumin: '720526-2702825',
      issued_date: '2016.02.15',
      region: '경북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061000_223/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061000_223/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061000_223/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '19-08-613003-50',
        driver_serial: 'FOD2OC',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '18615184762b949b8b8b221656310200',
    },
  },
  {
    ocr: {
      name: '조한길',
      jumin: '610409-1109210',
      issued_date: '2018.11.05',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061002_103/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061002_103/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061002_103/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '12-90-037158-21',
        driver_serial: '6E97VF',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '192783302962b949baad5a01656310202',
    },
  },
  {
    ocr: {
      name: '한승은',
      jumin: '690213-2475820',
      issued_date: '',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061003_781/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061003_781/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061003_781/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-01-030499-73',
        driver_serial: 'EOXOMR',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '88043023262b949bc746861656310204',
    },
  },
  {
    ocr: {
      name: '강창회',
      jumin: '950928-1691819',
      issued_date: '2020.12.31',
      region: '경기도 이천시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061005_834/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061005_834/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061005_834/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
  },
  {
    ocr: {
      name: '신효근',
      jumin: '920207-1067515',
      issued_date: '2019.10.10',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061008_277/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061008_277/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061008_277/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통, 2종소형',
        driver_number: '26-17-014644-20',
        driver_serial: 'R166UL',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '138730983462b949c1018301656310209',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '',
      jumin: '880904-2824318',
      issued_date: '2021.05.28',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061010_363/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061010_363/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061010_363/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '20-18-024225-43',
        driver_serial: 'VO7U7H',
      },
    },
  },
  {
    ocr: {
      name: '윤선중',
      jumin: '740405-1155222',
      issued_date: '2014.08.26',
      region: '경기도 안양시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061011_320/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061011_320/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061011_320/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '79780723362b949c40807a1656310212',
    },
  },
  {
    ocr: {
      name: '윤상희',
      jumin: '841127-2406216',
      issued_date: '2019.03.21',
      region: '대전광역시 중구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061014_238/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061014_238/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061014_238/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '23110000262b949c723a911656310215',
    },
  },
  {
    ocr: {
      name: '최원',
      jumin: '660123-1258010',
      issued_date: '2016.11.04',
      region: '강원지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061016_834/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061016_834/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061016_834/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '14-16-217780-10',
        driver_serial: '1TFI7S',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '123613893562b949c952a4d1656310217',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '오유권',
      jumin: '800217-1684715',
      issued_date: '2008.12.12',
      region: '서울특별시 서초구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061019_843/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061019_843/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061019_843/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '13263033162b949cc8a3f31656310220',
    },
  },
  {
    ocr: {
      name: '함성옥',
      jumin: '791225-2475735',
      issued_date: '2018.05.24',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061022_106/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061022_106/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061022_106/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-02-881965-72',
        driver_serial: 'THVU0F',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '102222946062b949cea49ad1656310222',
    },
  },
  {
    ocr: {
      name: '김대영',
      jumin: '850208-1041827',
      issued_date: '2012.09.18',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061023_747/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061023_747/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061023_747/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '서울 05-014444-21',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '199231847562b949d06c9b81656310224',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '김혜월',
      jumin: '790927-2069418',
      issued_date: '2017.07.27',
      region: '서울특별시 관악구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061025_638/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061025_638/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061025_638/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 28,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '39553701162b949d2a7f131656310226',
    },
  },
  {
    ocr: {
      name: '오은경',
      jumin: '640315-2144119',
      issued_date: '2019.06.28',
      region: '전라남도 순천시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061028_258/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061028_258/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061028_258/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '79390939862b949d50e87d1656310229',
    },
  },
  {
    ocr: {
      name: '김재범',
      jumin: '760411-1123116',
      issued_date: '2014.12.18',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061030_610/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061030_610/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061030_610/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '12-98-621135-01',
        driver_serial: '4OSUEL',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '94646061062b949d7443071656310231',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '김혜원',
      jumin: '770613-2559911',
      issued_date: '2019.05.24',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061033_931/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061033_931/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061033_931/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '18-04-043573-11',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '136280613562b949daa6dcd1656310234',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '이선옥',
      jumin: '570222-2912618',
      issued_date: '2021.06.03',
      region: '경기도 파주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061037_643/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061037_643/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061037_643/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '129211120362b949de770941656310238',
    },
  },
  {
    ocr: {
      name: '이우진',
      jumin: '790808-1051215',
      issued_date: '2016.12.06',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061040_073/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061040_073/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061040_073/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 19,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-01-232091-60',
        driver_serial: '8GD5F5',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '27989754062b949e09fc991656310240',
    },
  },
  {
    ocr: {
      name: '이병학',
      jumin: '781015-1806422',
      issued_date: '2017.01.03',
      region: '서울특별시 서초구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061041_835/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061041_835/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061041_835/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 19,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '38703500162b949e297e721656310242',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '김준기',
      jumin: '831029-1261111',
      issued_date: '2016.01.05',
      region: '강원지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061045_818/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061045_818/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061045_818/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '14-07-007140-30',
        driver_serial: '7S6694',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '38171006362b949e65893d1656310246',
    },
  },
  {
    ocr: {
      name: '정정승',
      jumin: '760409-1074421',
      issued_date: '2019.03.19',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061047_446/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061047_446/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061047_446/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '13-00-689560-20',
        driver_serial: 'FEE761',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '197748366462b949e822be81656310248',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '손원정',
      jumin: '710302-2117325',
      issued_date: '2018.10.31',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061051_101/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061051_101/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061051_101/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '12-89-077811-34',
        driver_serial: 'I7V9OU',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '198771620162b949ebc446a1656310251',
    },
  },
  {
    ocr: {
      name: '손인애',
      jumin: '700812-2120028',
      issued_date: '2017.11.21',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061053_106/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061053_106/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061053_106/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '22-93-056109-11',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '137763469662b949edb26161656310253',
    },
  },
  {
    ocr: {
      name: '송은미',
      jumin: '770602-2122925',
      issued_date: '2016.10.24',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061054_945/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061054_945/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061054_945/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '12-16-632168-20',
        driver_serial: 'I4PPWZ',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '6967444362b949ef8aa851656310255',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '신원호',
      jumin: '860308-1341810',
      issued_date: '2019.06.08',
      region: '경기도 수원시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061059_606/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061059_606/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061059_606/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 20,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
  },
  {
    ocr: {
      name: '정현지',
      jumin: '881118-2768619',
      issued_date: '2014.04.14',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061102_038/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061102_038/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061102_038/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 19,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '대구 14-023412-70',
        driver_serial: '8E7PE6',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '186178350862b949f69d4d91656310262',
    },
  },
  {
    ocr: {
      name: '김지수',
      jumin: '920211-2224114',
      issued_date: '2009.03.04',
      region: '경기도 여주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061103_937/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061103_937/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061103_937/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '8933183662b949f8a2c771656310264',
    },
  },
  {
    ocr: {
      name: '김상택',
      jumin: '681205-1674617',
      issued_date: '2019.11.26',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061107_357/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061107_357/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061107_357/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '22-10-050641-11',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '103623931162b949fc02fbb1656310268',
    },
  },
  {
    ocr: {
      name: '신준영',
      jumin: '770710-1052314',
      issued_date: '2021.11.04',
      region: '경기도남부경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061109_218/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061109_218/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061109_218/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '13-15-616842-71',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '164011496462b949fdc79b41656310269',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '김광신',
      jumin: '750610-1520218',
      issued_date: '2020.06.26',
      region: '전북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061112_438/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061112_438/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061112_438/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종대형, 1종보통',
        driver_number: '17-12-047098-31',
        driver_serial: 'MEUW8B',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '172824413462b94a0114db01656310273',
    },
  },
  {
    ocr: {
      name: '조민균',
      jumin: '680126-1566020',
      issued_date: '2016.05.20',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061114_391/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061114_391/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061114_391/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '18-91-065940-64',
        driver_serial: 'ED1EUA',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '110921927762b94a02dffc11656310274',
    },
  },
  {
    ocr: {
      name: '이희숙',
      jumin: '640616-2235013',
      issued_date: '2019.02.18',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061116_206/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061116_206/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061116_206/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-09-228706-20',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '125092035662b94a04c9bfe1656310276',
    },
  },
  {
    ocr: {
      name: '김경자',
      jumin: '781229-2635211',
      issued_date: '2016.03.25',
      region: '부산광역시 금정구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061118_115/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061118_115/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061118_115/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '26648128862b94a06e37281656310278',
    },
  },
  {
    ocr: {
      name: '강수민',
      jumin: '841103-2023113',
      issued_date: '2002.05.25',
      region: '서울특별시 성북구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061120_609/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061120_609/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061120_609/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 24,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '198231911662b94a098bc9d1656310281',
    },
  },
  {
    ocr: {
      name: '최경미',
      jumin: '800307-2703911',
      issued_date: '2011.10.26',
      region: '경기도 안산시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061123_289/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061123_289/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061123_289/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '188053290962b94a0c31bfe1656310284',
    },
  },
  {
    ocr: {
      name: '이혜진',
      jumin: '840210-2075816',
      issued_date: '2018.06.18',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061126_871/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061126_871/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061126_871/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '13-08-662700-90',
        driver_serial: '70O2ZN',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '103984060462b94a0f772811656310287',
    },
  },
  {
    ocr: {
      name: '봉정숙',
      jumin: '820907-2639615',
      issued_date: '2012.01.10',
      region: '전라남도 광양시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061128_832/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061128_832/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061128_832/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '44667137462b94a1166aca1656310289',
    },
  },
  {
    ocr: {
      name: '허문희',
      jumin: '700212-2018824',
      issued_date: '',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061131_065/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061131_065/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061131_065/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 21,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-02-086898-91',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '190576885862b94a139c7c01656310291',
    },
  },
  {
    ocr: {
      name: '이창훈',
      jumin: '740502-1466917',
      issued_date: '2014.10.30',
      region: '경기지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061133_268/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061133_268/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061133_268/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 19,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '13-07-643878-40',
        driver_serial: 'V6U7GI',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '147447496462b94a15e05bc1656310293',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '홍주명',
      jumin: '660801-1829218',
      issued_date: '2011.02.09',
      region: '경상남도 창원시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061136_092/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061136_092/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061136_092/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
  },
  {
    ocr: {
      name: '김경수',
      jumin: '841211-1504316',
      issued_date: '2016.12.02',
      region: '전라북도 전주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061138_447/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061138_447/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061138_447/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '185012656262b94a1b191dc1656310299',
    },
  },
  {
    ocr: {
      name: '홍근휘',
      jumin: '870224-1912019',
      issued_date: '2021.02.07',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061141_820/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061141_820/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061141_820/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '13-09-029410-62',
        driver_serial: '079S6L',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '134943963862b94a1ec1fb21656310302',
    },
  },
  {
    ocr: {
      name: '권병국',
      jumin: '761119-1829411',
      issued_date: '1999.11.06',
      region: '경상남도 진주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061144_001/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061144_001/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061144_001/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '30802074862b94a209d17f1656310304',
    },
  },
  {
    ocr: {
      name: '이현숙',
      jumin: '681102-2695617',
      issued_date: '',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061146_289/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061146_289/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061146_289/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '22-90-077171-90',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '4836970662b94a235af921656310307',
    },
  },
  {
    ocr: {
      name: '김성준',
      jumin: '790714-1350816',
      issued_date: '2007.12.13',
      region: '충청북도 음성군수',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061148_465/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061148_465/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061148_465/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '152682427462b94a252092a1656310309',
    },
  },
  {
    ocr: {
      name: '장미리',
      jumin: '830520-2657226',
      issued_date: '2015.12.21',
      region: '충남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061150_911/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061150_911/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061150_911/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '11-06-838781-10',
        driver_serial: '7U6OV2',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '149882986762b94a278b5b51656310311',
    },
  },
  {
    ocr: {
      name: '하나리',
      jumin: '930923-2403816',
      issued_date: '2015.12.21',
      region: '충청북도 청주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061153_010/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061153_010/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061153_010/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '88681218862b94a29d5b621656310313',
    },
  },
  {
    ocr: {
      name: '박민서',
      jumin: '770513-2121018',
      issued_date: '2003.08.20',
      region: '경상남도 창원시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061155_590/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061155_590/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061155_590/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '81414817762b94a2c645b51656310316',
    },
  },
  {
    ocr: {
      name: '박나리',
      jumin: '770215-2852424',
      issued_date: '2014.11.07',
      region: '부산광역시 금정구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061158_092/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061158_092/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061158_092/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '204946006862b94a2f1b5311656310319',
    },
  },
  {
    ocr: {
      name: '이소이',
      jumin: '780102-2697218',
      issued_date: '2006.12.20',
      region: '대구광역시 서구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061200_830/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061200_830/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061200_830/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '90485439462b94a3173bbd1656310321',
    },
  },
  {
    ocr: {
      name: '정은례',
      jumin: '801114-2173227',
      issued_date: '2013.01.09',
      region: '충청남도 공주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061203_127/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061203_127/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061203_127/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 21,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '191334861862b94a3405c8f1656310324',
    },
  },
  {
    ocr: {
      name: '김경민',
      jumin: '791111-2005528',
      issued_date: '2014.07.07',
      region: '경기지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061205_584/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061205_584/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061205_584/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '13-05-800745-80',
        driver_serial: '8EFO87',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '172165606762b94a3624c3a1656310326',
    },
  },
  {
    ocr: {
      name: '오명이',
      jumin: '710123-2462910',
      issued_date: '2020.04.06',
      region: '광주광역시 서구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061207_370/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061207_370/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061207_370/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '204980795062b94a38282641656310328',
    },
  },
  {
    ocr: {
      name: '문희정',
      jumin: '741027-2392311',
      issued_date: '2000.01.14',
      region: '충청북도 청주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061209_800/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061209_800/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061209_800/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '118376498462b94a3a5cc761656310330',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '장미진',
      jumin: '870711-2149014',
      issued_date: '2005.01.17',
      region: '인천광역시 연수구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061212_133/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061212_133/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061212_133/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 19,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '129968791762b94a3cc68bc1656310332',
    },
  },
  {
    ocr: {
      name: '김준영',
      jumin: '840525-1106419',
      issued_date: '2013.05.23',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061214_529/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061214_529/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061214_529/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '부산 13-613601-50',
        driver_serial: '2O67SP',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '144065273062b94a3f257b11656310335',
    },
  },
  {
    ocr: {
      name: '천민기',
      jumin: '890912-1157313',
      issued_date: '2012.05.01',
      region: '인천광역시 부평구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061216_270/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061216_270/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061216_270/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '139560474762b94a411cb731656310337',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '김휘정',
      jumin: '870621-2683118',
      issued_date: '2015.08.20',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061220_786/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061220_786/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061220_786/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '22-15-049201-90',
        driver_serial: '2WD9N7',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '88015076262b94a454f7961656310341',
    },
  },
  {
    ocr: {
      name: '김지현',
      jumin: '720711-1411811',
      issued_date: '2015.10.26',
      region: '충남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061222_484/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061222_484/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061222_484/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '16-94-087527-70',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '187370943562b94a472a59a1656310343',
    },
  },
  {
    ocr: {
      name: '조재근',
      jumin: '801217-1070121',
      issued_date: '2021.06.14',
      region: '경기도남부경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061224_341/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061224_341/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061224_341/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '13-99-033723-23',
        driver_serial: 'OQR7O5',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '76681234462b94a48e74521656310344',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '방성우',
      jumin: '790423-1495811',
      issued_date: '2017.07.20',
      region: '전라북도 전주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061230_263/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061230_263/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061230_263/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '204055370762b94a4eec3ac1656310350',
    },
  },
  {
    ocr: {
      name: '신은경',
      jumin: '720314-2648117',
      issued_date: '2015.01.20',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061232_801/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061232_801/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061232_801/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
  },
  {
    ocr: {
      name: '김혜경',
      jumin: '771106-2148518',
      issued_date: '',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061235_658/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061235_658/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061235_658/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: false,
      message: 'Issue date is invalid',
      error_code: 'A002',
      transaction_id: '145472883362b94a55373921656310357',
    },
  },
  {
    ocr: {
      name: '윤상진',
      jumin: '821022-1030843',
      issued_date: '2021.06.11',
      region: '서울특별시경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061237_624/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061237_624/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061237_624/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-19-803063-11',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '185254959662b94a56385d71656310358',
    },
  },
  {
    ocr: {
      name: '최영자',
      jumin: '551127-2574512',
      issued_date: '2002.01.19',
      region: '전라남도 여수시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061239_592/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061239_592/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061239_592/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '214252631162b94a58578bf1656310360',
    },
  },
  {
    ocr: {
      name: '김영언',
      jumin: '860228-1899918',
      issued_date: '2019.03.07',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061242_071/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061242_071/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061242_071/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '12-04-012438-60',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '12049445262b94a5a964291656310362',
    },
  },
  {
    ocr: {
      name: '이학창',
      jumin: '800917-1075519',
      issued_date: '2017.05.23',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061243_945/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061243_945/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061243_945/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '19-02-627014-11',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '90322328262b94a5c7f8871656310364',
    },
  },
  {
    ocr: {
      name: '성은석',
      jumin: '800617-1721515',
      issued_date: '2015.03.19',
      region: '제주특별자치도지사',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061245_863/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061245_863/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061245_863/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 27,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '94508804362b94a5e86a991656310366',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '박영신',
      jumin: '820725-2675123',
      issued_date: '2002.12.13',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061250_095/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061250_095/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061250_095/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '197040365762b94a63b8bde1656310371',
    },
  },
  {
    ocr: {
      name: '조영화',
      jumin: '720411-2156212',
      issued_date: '2000.01.06',
      region: '인천광역시 부평구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061253_607/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061253_607/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061253_607/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '16750746062b94a66525c61656310374',
    },
  },
  {
    ocr: {
      name: '정재순',
      jumin: '690907-2552517',
      issued_date: '2015.06.16',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061256_211/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061256_211/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061256_211/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '18-07-042394-00',
        driver_serial: '651F2N',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '123328172662b94a68e4e3b1656310376',
    },
  },
  {
    ocr: {
      name: '박광희',
      jumin: '771226-2243133',
      issued_date: '2017.05.02',
      region: '인천광역시 남구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061258_232/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061258_232/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061258_232/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '209859902562b94a6b3bbf91656310379',
    },
  },
  {
    ocr: {
      name: '강종혁',
      jumin: '841023-1284211',
      issued_date: '2010.06.21',
      region: '경상북도 김천시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061301_019/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061301_019/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061301_019/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 24,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '6549814062b94a6d9cda51656310381',
    },
  },
  {
    ocr: {
      name: '장재열',
      jumin: '760204-1325627',
      issued_date: '2015.09.21',
      region: '강원지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061303_486/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061303_486/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061303_486/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '14-00-212334-61',
        driver_serial: 'N96DED',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '57138565362b94a7029eb21656310384',
    },
  },
  {
    ocr: {
      name: '오은진',
      jumin: '960301-2284316',
      issued_date: '2014.04.16',
      region: '강원도 원주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061305_619/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061305_619/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061305_619/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '43166362b94a72684131656310386',
    },
  },
  {
    ocr: {
      name: '박민협',
      jumin: '870719-1065614',
      issued_date: '2017.09.21',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061308_268/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061308_268/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061308_268/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-10-809126-30',
        driver_serial: 'O59F6R',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '114532665362b94a74cff331656310388',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '김희준',
      jumin: '870701-1892811',
      issued_date: '2022.05.04',
      region: '부산광역시 동구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061312_218/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061312_218/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061312_218/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '100633530062b94a7995bf51656310393',
    },
  },
  {
    ocr: {
      name: '신영진',
      jumin: '740114-2017828',
      issued_date: '2005.08.30',
      region: '경기도 가평시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061315_357/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061315_357/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061315_357/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '11106804662b94a7bdf5331656310395',
    },
  },
  {
    ocr: {
      name: '김학균',
      jumin: '780711-1100119',
      issued_date: '2021.11.22',
      region: '서울특별시경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061317_728/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061317_728/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061317_728/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종대형, 2종보통',
        driver_number: '11-01-060645-11',
        driver_serial: '7GREJV',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '70167540262b94a7e57ca61656310398',
    },
  },
  {
    ocr: {
      name: '김형수',
      jumin: '700226-1056813',
      issued_date: '2004.11.08',
      region: '경기도 용인시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061319_666/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061319_666/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061319_666/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '97673781262b94a80442961656310400',
    },
  },
  {
    ocr: {
      name: '김명애',
      jumin: '600415-2057017',
      issued_date: '2015.02.17',
      region: '경기도 평택시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061322_061/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061322_061/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061322_061/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '155042573662b94a82bfd1f1656310402',
    },
  },
  {
    ocr: {
      name: '조영옥',
      jumin: '781109-2384214',
      issued_date: '2012.05.25',
      region: '충남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061324_604/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061324_604/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061324_604/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '충남 12-603148-10',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '29644667962b94a85971b01656310405',
    },
  },
  {
    ocr: {
      name: '김순덕',
      jumin: '700924-2182611',
      issued_date: '2007.05.09',
      region: '인천광역시 서구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061326_752/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061326_752/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061326_752/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '133557062862b94a876e8971656310407',
    },
  },
  {
    ocr: {
      name: '김여혁',
      jumin: '920223-1024110',
      issued_date: '2015.11.26',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061329_326/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061329_326/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061329_326/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-11-806517-91',
        driver_serial: 'WHOG23',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '188749182762b94a8a177071656310410',
    },
  },
  {
    ocr: {
      name: '오미정',
      jumin: '830223-2682619',
      issued_date: '2016.04.04',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061331_220/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061331_220/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061331_220/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종대형, 1종보통',
        driver_number: '22-02-031334-10',
        driver_serial: 'G78P9K',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '180142954062b94a8bd52fa1656310411',
    },
  },
  {
    ocr: {
      name: '최욱',
      jumin: '821117-1820417',
      issued_date: '2017.06.05',
      region: '경상남도 창원시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061333_046/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061333_046/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061333_046/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 21,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '212604410862b94a8dc1af11656310413',
    },
  },
  {
    ocr: {
      name: '이한범',
      jumin: '850106-1274018',
      issued_date: '2021.08.23',
      region: '강원도 강릉시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061335_632/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061335_632/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061335_632/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 18,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '119298296862b94a904c2781656310416',
    },
  },
  {
    ocr: {
      name: '이명훈',
      jumin: '780207-1807913',
      issued_date: '2017.07.19',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061338_097/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061338_097/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061338_097/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 27,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종대형, 1종보통, 2종소형',
        driver_number: '15-97-607044-73',
        driver_serial: '8UV669',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '182213503962b94a92e3eb51656310418',
    },
  },
  {
    ocr: {
      name: '오은영',
      jumin: '710519-2055824',
      issued_date: '2017.10.11',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061340_239/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061340_239/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061340_239/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-93-658880-51',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '171345129562b94a94f0a341656310420',
    },
  },
  {
    ocr: {
      name: '조정욱',
      jumin: '701203-1010520',
      issued_date: '',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061342_444/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061342_444/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061342_444/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '11-89-869216-17',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '149049270462b94a97156511656310423',
    },
  },
  {
    ocr: {
      name: '김미영',
      jumin: '710825-2810116',
      issued_date: '2016.02.03',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061344_459/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061344_459/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061344_459/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '22-96-081397-30',
        driver_serial: '7S8EWR',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '66344527262b94a9908bc71656310425',
    },
  },
  {
    ocr: {
      name: '송영철',
      jumin: '890319-1187924',
      issued_date: '2015.03.02',
      region: '경남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061346_376/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061346_376/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061346_376/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '25-08-000401-30',
        driver_serial: '3VJFV7',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '70038241762b94a9aed1c41656310426',
    },
  },
  {
    ocr: {
      name: '신태정',
      jumin: '700331-2069113',
      issued_date: '2014.09.29',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061348_160/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061348_160/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061348_160/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-90-004166-10',
        driver_serial: 'FID8UW',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '95428102962b94a9cb72101656310428',
    },
  },
  {
    ocr: {
      name: '김진규',
      jumin: '890601-1684924',
      issued_date: '2017.09.05',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061350_036/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061350_036/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061350_036/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '22-09-014930-51',
        driver_serial: 'T80OH6',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '48731740462b94a9eacdc91656310430',
    },
  },
  {
    ocr: {
      name: '황선태',
      jumin: '820110-1149734',
      issued_date: '2016.01.09',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061351_985/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061351_985/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061351_985/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-16-201486-20',
        driver_serial: 'NUOG9G',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '180337517762b94aa0908da1656310432',
    },
  },
  {
    ocr: {
      name: '전중현',
      jumin: '830306-1023611',
      issued_date: '2019.04.18',
      region: '경기북부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061353_886/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061353_886/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061353_886/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-02-880669-83',
        driver_serial: 'VDO777',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '123690396262b94aa28abcf1656310434',
    },
  },
  {
    ocr: {
      name: '장지선',
      jumin: '820128-2463216',
      issued_date: '2005.05.24',
      region: '울산광역시 울주군수',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061355_975/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061355_975/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061355_975/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '21862933662b94aa4b1f961656310436',
    },
  },
  {
    ocr: {
      name: '강혜원',
      jumin: '900204-2932411',
      issued_date: '2017.08.08',
      region: '제주특별자치도지사',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061358_481/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061358_481/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061358_481/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 27,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '27926672762b94aa72db661656310439',
    },
  },
  {
    ocr: {
      name: '',
      jumin: '781003-1167611',
      issued_date: '',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061400_998/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061400_998/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061400_998/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '11-01-219553-93',
        driver_serial: '',
      },
    },
  },
  {
    ocr: {
      name: '송명희',
      jumin: '750713-2241215',
      issued_date: '2018.12.20',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061402_405/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061402_405/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061402_405/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '11-00-065262-51',
        driver_serial: 'UF71NE',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '40644021262b94aab03ed31656310443',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '임선영',
      jumin: '810221-2684814',
      issued_date: '2016.03.30',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061404_499/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061404_499/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061404_499/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '22-01-056152-32',
        driver_serial: 'UO129E',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '44051729462b94aad1a8551656310445',
    },
  },
  {
    ocr: {
      name: '김인구',
      jumin: '850203-1057612',
      issued_date: '2018.07.06',
      region: '경북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061406_267/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061406_267/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061406_267/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '13-04-003687-80',
        driver_serial: '9O10P7',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '131513966362b94aaed7c251656310446',
    },
  },
  {
    ocr: {
      name: '장세희',
      jumin: '830227-2328147',
      issued_date: '2016.08.04',
      region: '강원지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061408_286/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061408_286/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061408_286/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '14-07-401451-60',
        driver_serial: '9WS872',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '184121557262b94ab0ccba31656310448',
    },
  },
  {
    ocr: {
      name: '윤남귀',
      jumin: '820820-1117520',
      issued_date: '2011.09.26',
      region: '부산광역시 금정구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061409_982/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061409_982/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061409_982/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '3578200762b94ab2e65261656310450',
    },
  },
  {
    ocr: {
      name: '최윤정',
      jumin: '830630-2173315',
      issued_date: '2017.07.20',
      region: '경기북부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061412_694/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061412_694/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061412_694/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-08-203017-71',
        driver_serial: '6OW1RS',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '144103559962b94ab55083d1656310453',
    },
  },
  {
    ocr: {
      name: '김무성',
      jumin: '770212-1767829',
      issued_date: '',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061414_708/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061414_708/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061414_708/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '대구 13-048345-50',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '84289352862b94ab76467d1656310455',
    },
  },
  {
    ocr: {
      name: '이재호',
      jumin: '851008-1683836',
      issued_date: '2012.10.04',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061416_792/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061416_792/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061416_792/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '대구 05-017647-80',
        driver_serial: '3433RP',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '121755598162b94ab9656de1656310457',
    },
  },
  {
    ocr: {
      name: '현철',
      jumin: '740411-1953719',
      issued_date: '2016.07.29',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061418_687/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061418_687/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061418_687/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종대형, 2종보통',
        driver_number: '11-93-002253-00',
        driver_serial: 'P16OF9',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '53861077362b94abb6079c1656310459',
    },
  },
  {
    ocr: {
      name: '입영규',
      jumin: '731003-1161911',
      issued_date: '',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061420_617/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061420_617/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061420_617/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: false,
      message: 'Issue date is invalid',
      error_code: 'A002',
      transaction_id: '166751543462b94abe8cf611656310462',
    },
  },
  {
    ocr: {
      name: '권혁산',
      jumin: '811213-1066621',
      issued_date: '2022.01.06',
      region: '서울특별시경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061422_895/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061422_895/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061422_895/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-99-671330-71',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '109420940462b94abf9ec4d1656310463',
    },
  },
  {
    ocr: {
      name: '이창식',
      jumin: '660319-1408619',
      issued_date: '2019.06.03',
      region: '대전지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061425_050/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061425_050/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061425_050/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '25-14-031602-71',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '196438868262b94ac1a71191656310465',
    },
  },
  {
    ocr: {
      name: '최경하',
      jumin: '741106-1162628',
      issued_date: '2016.03.28',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061426_837/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061426_837/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061426_837/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '13-00-607827-10',
        driver_serial: '6VVG9Y',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '12658859562b94ac389d501656310467',
    },
  },
  {
    ocr: {
      name: '윤지훈',
      jumin: '710731-1063436',
      issued_date: '2014.02.14',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061428_919/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061428_919/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061428_919/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '경기 99-030616-61',
        driver_serial: 'N1V9GI',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '102313449462b94ac5889d01656310469',
    },
  },
  {
    ocr: {
      name: '강지민',
      jumin: '860627-1351414',
      issued_date: '2021.07.07',
      region: '서울특별시경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061430_864/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061430_864/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061430_864/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '15-08-012012-42',
        driver_serial: 'F680DA',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '43749670362b94ac78835f1656310471',
    },
  },
  {
    ocr: {
      name: '이명노',
      jumin: '970201-1236735',
      issued_date: '2021.09.29',
      region: '서울특별시 관악구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061432_805/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061432_805/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061432_805/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '96103818262b94ac9701571656310473',
    },
  },
  {
    ocr: {
      name: '노승춘',
      jumin: '550222-2279439',
      issued_date: '2018.04.16',
      region: '강원도 춘천시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061435_628/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061435_628/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061435_628/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '68931583362b94acc682a11656310476',
    },
  },
  {
    ocr: {
      name: '신지용',
      jumin: '880103-1235237',
      issued_date: '2014.07.28',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061438_305/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061438_305/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061438_305/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-07-218154-00',
        driver_serial: '966JNY',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '156857142762b94aceebf491656310478',
    },
  },
  {
    ocr: {
      name: '정양숙',
      jumin: '701127-2024011',
      issued_date: '2020.09.22',
      region: '경기북부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061440_201/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061440_201/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061440_201/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '11-99-850740-11',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '158889062b94ad0d454e1656310480',
    },
  },
  {
    ocr: {
      name: '김상희',
      jumin: '850120-1630325',
      issued_date: '2017.03.16',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061442_056/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061442_056/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061442_056/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종소형, 원동기',
        driver_number: '18-01-019443-80',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '192200574562b94ad2d6d2e1656310482',
    },
  },
  {
    ocr: {
      name: '김신화',
      jumin: '740922-2233216',
      issued_date: '2013.11.11',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061444_091/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061444_091/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061444_091/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '서울 94-277487-23',
        driver_serial: 'INN1UK',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '155267443162b94ad4c6d401656310484',
    },
  },
  {
    ocr: {
      name: '길윤희',
      jumin: '700306-2524610',
      issued_date: '2015.07.01',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061446_066/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061446_066/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061446_066/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 21,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '22-96-034785-80',
        driver_serial: '867O2B',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '212553159262b94ad6abb761656310486',
    },
  },
  {
    ocr: {
      name: '음정식',
      jumin: '890619-1046315',
      issued_date: '2020.08.03',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061448_099/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061448_099/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061448_099/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 21,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-18-226653-51',
        driver_serial: 'U978UG',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '46895901062b94ad8b62381656310488',
    },
  },
  {
    ocr: {
      name: '김나영',
      jumin: '760216-2574218',
      issued_date: '2020.11.09',
      region: '서울특별시 광진구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061450_372/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061450_372/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061450_372/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '134264881062b94adb148e21656310491',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '최정배',
      jumin: '780210-1899718',
      issued_date: '2021.08.05',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061456_509/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061456_509/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061456_509/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '12-01-031671-42',
        driver_serial: '18D9DC',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '192809016962b94ae11c9fb1656310497',
    },
  },
  {
    ocr: {
      name: '박정훈',
      jumin: '870324-1178236',
      issued_date: '2017.09.29',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061458_445/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061458_445/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061458_445/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-10-615008-30',
        driver_serial: 'O1O9PS',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '119951173262b94ae30803e1656310499',
    },
  },
  {
    ocr: {
      name: '이명희',
      jumin: '840531-1110018',
      issued_date: '2016.12.14',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061500_348/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061500_348/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061500_348/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '12-01-600586-13',
        driver_serial: '6U8989',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '202455655662b94ae4dc5bd1656310500',
    },
  },
  {
    ocr: {
      name: '배수완',
      jumin: '791123-1899727',
      issued_date: '2016.10.14',
      region: '경기도 의정부시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061502_284/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061502_284/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061502_284/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '108152329562b94ae7686cd1656310503',
    },
  },
  {
    ocr: {
      name: '홍지윤',
      jumin: '750407-2489416',
      issued_date: '2018.01.10',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061505_393/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061505_393/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061505_393/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-18-201336-40',
        driver_serial: '6V98UW',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '213673297862b94ae9f05151656310505',
    },
  },
  {
    ocr: {
      name: '박광수',
      jumin: '691009-1547517',
      issued_date: '2017.01.03',
      region: '전북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061507_382/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061507_382/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061507_382/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종대형, 2종보통',
        driver_number: '17-92-026521-03',
        driver_serial: '9IQ960',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '146844456762b94aec23cc61656310508',
    },
  },
  {
    ocr: {
      name: '권병훈',
      jumin: '800207-1822711',
      issued_date: '2022.01.20',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061509_470/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061509_470/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061509_470/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 19,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '20-01-011929-56',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '71424317862b94aee0652e1656310510',
    },
  },
  {
    ocr: {
      name: '전창',
      jumin: '641116-1052918',
      issued_date: '2021.12.28',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061511_404/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061511_404/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061511_404/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '11-11-210397-12',
        driver_serial: 'U7UNY3',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '88697602062b94af0146f11656310512',
    },
  },
  {
    ocr: {
      name: '유홍열',
      jumin: '850513-1392316',
      issued_date: '2018.06.25',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061513_544/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061513_544/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061513_544/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '15-05-002385-31',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '185165088862b94af22a0691656310514',
    },
  },
  {
    ocr: {
      name: '최매희',
      jumin: '541125-2239014',
      issued_date: '2000.03.04',
      region: '서울특별시 성북구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061515_397/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061515_397/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061515_397/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '116108508862b94af4188951656310516',
    },
  },
  {
    ocr: {
      name: '염현정',
      jumin: '840524-2096014',
      issued_date: '2013.01.11',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061517_966/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061517_966/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061517_966/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '부산 03-642755-70',
        driver_serial: '2O65SO',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '66678927762b94af6a97651656310518',
    },
  },
  {
    ocr: {
      name: '이효정',
      jumin: '810203-2114426',
      issued_date: '2015.10.13',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061520_125/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061520_125/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061520_125/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '13-02-878618-91',
        driver_serial: 'N8N226',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '62244507362b94af8c73ca1656310520',
    },
  },
  {
    ocr: {
      name: '이성민',
      jumin: '830205-1123517',
      issued_date: '2016.06.14',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061522_174/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061522_174/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061522_174/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '26-02-014709-31',
        driver_serial: '6U98IJ',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '32623385662b94afac7f971656310522',
    },
  },
  {
    ocr: {
      name: '이미진',
      jumin: '850831-2903910',
      issued_date: '2015.09.04',
      region: '울산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061524_052/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061524_052/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061524_052/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '26-15-018461-00',
        driver_serial: '8T1DP4',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '177579942762b94afc9453d1656310524',
    },
  },
  {
    ocr: {
      name: '강선자',
      jumin: '710505-2558826',
      issued_date: '2015.08.04',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061525_933/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061525_933/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061525_933/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 25,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '18-96-126878-60',
        driver_serial: 'FVWUUG',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '83384320662b94afe7b2a71656310526',
    },
  },
  {
    ocr: {
      name: '황경수',
      jumin: '790707-1018139',
      issued_date: '2018.07.11',
      region: '경남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061527_746/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061527_746/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061527_746/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-09-815360-60',
        driver_serial: '8O68VP',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '81026529662b94b004ed201656310528',
    },
  },
  {
    ocr: {
      name: '황태성',
      jumin: '860129-1829311',
      issued_date: '2019.10.25',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061529_590/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061529_590/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061529_590/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '20-04-013360-94',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '51907567362b94b02328531656310530',
    },
  },
  {
    ocr: {
      name: '안정은',
      jumin: '751022-2238719',
      issued_date: '2018.09.03',
      region: '경기북부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061531_467/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061531_467/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061531_467/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '13-04-811260-80',
        driver_serial: 'E9DUT3',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '194504647762b94b040ef501656310532',
    },
  },
  {
    ocr: {
      name: '백명선',
      jumin: '990316-1622925',
      issued_date: '2021.12.07',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061533_219/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061533_219/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061533_219/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '17-19-024310-11',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '161579601062b94b05eb8fd1656310533',
    },
  },
  {
    ocr: {
      name: '류중모',
      jumin: '880224-1389911',
      issued_date: '2020.10.12',
      region: '충청북도 청주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061535_426/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061535_426/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061535_426/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '208245383862b94b08185b91656310536',
    },
  },
  {
    ocr: {
      name: '김창하',
      jumin: '880531-1082428',
      issued_date: '2016.11.02',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061537_896/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061537_896/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061537_896/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '11-07-012831-91',
        driver_serial: '981792',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '210544773462b94b0a879cf1656310538',
    },
  },
  {
    ocr: {
      name: '이종성',
      jumin: '870915-1268114',
      issued_date: '2013.03.15',
      region: '강원지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061539_830/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061539_830/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061539_830/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '강원 05-405320-90',
        driver_serial: '7O47CP',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '153890162362b94b0c777aa1656310540',
    },
  },
  {
    ocr: {
      name: '송현석',
      jumin: '880914-1543911',
      issued_date: '2021.04.22',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061541_759/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061541_759/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061541_759/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '17-06-030759-95',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '114017708962b94b0eae5581656310542',
    },
  },
  {
    ocr: {
      name: '유영주',
      jumin: '780329-2042418',
      issued_date: '2020.10.30',
      region: '경기도 고양시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061543_999/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061543_999/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061543_999/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '32085501762b94b1089e951656310544',
    },
  },
  {
    ocr: {
      name: '채수찬',
      jumin: '710505-1545818',
      issued_date: '2009.11.05',
      region: '전라북도 김제시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061546_457/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061546_457/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061546_457/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '116683887462b94b13345561656310547',
    },
  },
  {
    ocr: {
      name: '김미경',
      jumin: '811202-2467315',
      issued_date: '2016.07.25',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061553_998/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061553_998/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061553_998/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '16-01-604804-90',
        driver_serial: '91VWDE',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '57669303262b94b1a8dab71656310554',
    },
  },
  {
    ocr: {
      name: '윤지연',
      jumin: '850525-2074126',
      issued_date: '2014.09.12',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061555_730/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061555_730/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061555_730/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-12-680249-31',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '62266144962b94b1c6b8bc1656310556',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '김은섭',
      jumin: '730922-1462410',
      issued_date: '',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061600_886/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061600_886/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061600_886/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 0,
      face_recog_time: 20,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '',
        driver_serial: '',
      },
    },
  },
  {
    ocr: {
      name: '이혜정',
      jumin: '831015-2850611',
      issued_date: '2001.03.27',
      region: '울산광역시 중구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061603_394/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061603_394/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061603_394/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 27,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '203038628762b94b241ef091656310564',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '오상록',
      jumin: '770304-1852018',
      issued_date: '2018.11.29',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061607_963/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061607_963/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061607_963/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '19-00-026973-50',
        driver_serial: '0I762L',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '20717205062b94b28c37021656310568',
    },
  },
  {
    ocr: {
      name: '김지호',
      jumin: '841027-1018619',
      issued_date: '2017.10.16',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061610_162/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061610_162/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061610_162/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-03-622096-11',
        driver_serial: 'NJGRPC',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '25251482662b94b2b08d161656310571',
    },
  },
  {
    ocr: {
      name: '김선국',
      jumin: '710402-1408531',
      issued_date: '2014.09.30',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061612_349/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061612_349/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061612_349/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '14-00-008443-20',
        driver_serial: '6HOUEF',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '177900757562b94b2d1bd801656310573',
    },
  },
  {
    ocr: {
      name: '장지용',
      jumin: '910806-1400611',
      issued_date: '2018.01.05',
      region: '충남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061614_480/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061614_480/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061614_480/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '25-10-034290-80',
        driver_serial: '0O71H7',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '80568429562b94b30d92461656310576',
    },
  },
  {
    ocr: {
      name: '윤예지',
      jumin: '870220-2157513',
      issued_date: '2016.02.05',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061618_142/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061618_142/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061618_142/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '16-08-616738-10',
        driver_serial: 'V9EGQE',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '78506896862b94b32c824f1656310578',
    },
  },
  {
    ocr: {
      name: '강미선',
      jumin: '650113-2261018',
      issued_date: '2019.07.10',
      region: '강원지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061620_185/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061620_185/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061620_185/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '14-01-002655-00',
        driver_serial: '95D3VP',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '124598301462b94b34ddc181656310580',
    },
  },
  {
    ocr: {
      name: '이유석',
      jumin: '901115-1019416',
      issued_date: '2017.09.25',
      region: '경기북부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061622_334/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061622_334/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061622_334/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종대형, 1종보통',
        driver_number: '11-07-216790-94',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '175079434962b94b374608d1656310583',
    },
  },
  {
    ocr: {
      name: '강명석',
      jumin: '880407-1154919',
      issued_date: '2013.01.11',
      region: '인천광역시 계양구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061624_619/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061624_619/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061624_619/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '167856956962b94b398cd871656310585',
    },
  },
  {
    ocr: {
      name: '한소라',
      jumin: '891124-2400613',
      issued_date: '2010.05.06',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061627_355/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061627_355/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061627_355/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '142708008562b94b3d6fb9f1656310589',
    },
  },
  {
    ocr: {
      name: '윤선녀',
      jumin: '680422-2009520',
      issued_date: '2012.02.09',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061631_298/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061631_298/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061631_298/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 21,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '인천 02-057873-50',
        driver_serial: '5O61WO',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '29487125362b94b401b1711656310592',
    },
  },
  {
    ocr: {
      name: '이윤희',
      jumin: '801117-2806914',
      issued_date: '2014.08.06',
      region: '경남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061633_466/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061633_466/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061633_466/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '15-00-602864-00',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '128570487562b94b42292b51656310594',
    },
  },
  {
    ocr: {
      name: '손왕근',
      jumin: '680228-1637716',
      issued_date: '2015.05.11',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061635_683/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061635_683/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061635_683/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '23-95-040867-91',
        driver_serial: '71RE8Y',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '91021393762b94b4459cd51656310596',
    },
  },
  {
    ocr: {
      name: '홍현아',
      jumin: '911114-2261110',
      issued_date: '2008.12.26',
      region: '경기도 여주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061637_671/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061637_671/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061637_671/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 21,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '128059409162b94b46469be1656310598',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '조재광',
      jumin: '831219-1042621',
      issued_date: '2016.08.23',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061640_083/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061640_083/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061640_083/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-16-245879-90',
        driver_serial: '0NW7OO',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '4681294562b94b48b59491656310600',
    },
  },
  {
    ocr: {
      name: '문혜림',
      jumin: '870604-2094211',
      issued_date: '2022.03.22',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061642_181/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061642_181/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061642_181/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '12-10-633359-42',
        driver_serial: 'GWV2DU',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '52187778062b94b4af1a101656310602',
    },
  },
  {
    ocr: {
      name: '이은영',
      jumin: '840214-2056437',
      issued_date: '',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061644_453/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061644_453/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061644_453/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '11-06-608631-82',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '160160938262b94b4d426231656310605',
    },
  },
  {
    ocr: {
      name: '박근효',
      jumin: '730201-1892411',
      issued_date: '2014.08.19',
      region: '경기지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061646_476/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061646_476/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061646_476/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '13-00-656123-50',
        driver_serial: '79EJXB',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '149691232462b94b4f307271656310607',
    },
  },
  {
    ocr: {
      name: '윤지애',
      jumin: '810325-2568217',
      issued_date: '2017.03.24',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061648_505/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061648_505/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061648_505/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '18-02-106038-90',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '16214088662b94b511f6e51656310609',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '이은숙',
      jumin: '810419-2110515',
      issued_date: '2015.03.14',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061652_545/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061652_545/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061652_545/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '12-05-637403-10',
        driver_serial: '998JUK',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '2637314262b94b553f1731656310613',
    },
  },
  {
    ocr: {
      name: '김현주',
      jumin: '881028-2551818',
      issued_date: '2020.12.22',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061654_805/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061654_805/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061654_805/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '18-11-026432-60',
        driver_serial: 'FJOVVC',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '161449819162b94b5768eaa1656310615',
    },
  },
  {
    ocr: {
      name: '이정산',
      jumin: '840529-1216413',
      issued_date: '2019.04.11',
      region: '서울특별시 서대문구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061656_790/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061656_790/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061656_790/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '116725325862b94b59b22171656310617',
    },
  },
  {
    ocr: {
      name: '라혜자',
      jumin: '691001-2177315',
      issued_date: '2020.08.10',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061659_656/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061659_656/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061659_656/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 18,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '13-93-048757-01',
        driver_serial: 'GSH9OZ',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '29856886262b94b5c510961656310620',
    },
  },
  {
    ocr: {
      name: '한창훈',
      jumin: '700301-1052812',
      issued_date: '2017.11.23',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061702_034/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061702_034/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061702_034/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 21,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종대형',
        driver_number: '11-90-881619-91',
        driver_serial: 'W0V7D1',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '150904329162b94b5ef13011656310622',
    },
  },
  {
    ocr: {
      name: '윤서준',
      jumin: '790618-1682810',
      issued_date: '2019.11.04',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061705_042/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061705_042/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061705_042/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 20,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '22-98-034560-63',
        driver_serial: 'PN114C',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '153972076362b94b61cf3b41656310625',
    },
  },
  {
    ocr: {
      name: '우째준',
      jumin: '800313-1830725',
      issued_date: '',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061707_462/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061707_462/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061707_462/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '19-07-607992-81',
        driver_serial: '',
      },
    },
  },
  {
    ocr: {
      name: '이가영',
      jumin: '900527-2698116',
      issued_date: '2020.12.16',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061709_786/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061709_786/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061709_786/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '22-10-040457-60',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '148704874362b94b66823fd1656310630',
    },
  },
  {
    ocr: {
      name: '진소영',
      jumin: '851007-2174146',
      issued_date: '2013.06.19',
      region: '경기지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061712_254/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061712_254/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061712_254/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '',
        driver_serial: '3431RO',
      },
    },
  },
  {
    ocr: {
      name: '한재정',
      jumin: '790814-1057913',
      issued_date: '2016.06.30',
      region: '대전광역시 대덕구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061713_576/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061713_576/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061713_576/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '132943192462b94b6ab5d111656310634',
    },
  },
  {
    ocr: {
      name: '최길순',
      jumin: '591125-1396530',
      issued_date: '2015.07.17',
      region: '충청북도 충주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061717_915/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061717_915/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061717_915/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 27,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '53931323062b94b6ecd36f1656310638',
    },
  },
  {
    ocr: {
      name: '이주연',
      jumin: '790106-2031515',
      issued_date: '2016.09.08',
      region: '경기도 광명시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061720_700/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061720_700/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061720_700/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '148237988362b94b7187d5e1656310641',
    },
  },
  {
    ocr: {
      name: '한호동',
      jumin: '770506-1696410',
      issued_date: '2013.10.31',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061723_505/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061723_505/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061723_505/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '88821148662b94b749bcc61656310644',
    },
  },
  {
    ocr: {
      name: '김호경',
      jumin: '731028-2106421',
      issued_date: '2020.01.30',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061726_660/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061726_660/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061726_660/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '12-01-015351-62',
        driver_serial: 'OFT9O9',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '50415957262b94b7760f2f1656310647',
    },
  },
  {
    ocr: {
      name: '문성기',
      jumin: '830606-1067619',
      issued_date: '2020.02.20',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061728_574/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061728_574/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061728_574/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-07-010742-73',
        driver_serial: '8VE8D2',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '95559169262b94b794098f1656310649',
    },
  },
  {
    ocr: {
      name: '장지용',
      jumin: '910806-1400611',
      issued_date: '2018.01.05',
      region: '충남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061730_560/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061730_560/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061730_560/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '25-10-034290-80',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '31874207362b94b7b467621656310651',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '박용태',
      jumin: '880225-1392911',
      issued_date: '2014.08.04',
      region: '충북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061734_983/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061734_983/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061734_983/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종대형, 1종보통',
        driver_number: '15-06-011880-42',
        driver_serial: 'U4EFVC',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '35487004562b94b7fb40cb1656310655',
    },
  },
  {
    ocr: {
      name: '박자영',
      jumin: '640101-2041729',
      issued_date: '2016.07.11',
      region: '서울특별시 강북구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061737_076/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061737_076/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061737_076/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '158838861262b94b81d31a01656310657',
    },
  },
  {
    ocr: {
      name: '김탁연',
      jumin: '921115-2020416',
      issued_date: '2011.11.09',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061739_514/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061739_514/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061739_514/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 21,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '서울 11-850360-70',
        driver_serial: '7247FO',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '91084547662b94b84316801656310660',
    },
  },
  {
    ocr: {
      name: '유찬곤',
      jumin: '670514-1120328',
      issued_date: '2014.06.28',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061741_352/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061741_352/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061741_352/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '12-91-605622-13',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '119120378762b94b861ff111656310662',
    },
  },
  {
    ocr: {
      name: '김혁',
      jumin: '820505-1481911',
      issued_date: '2020.07.28',
      region: '경기도 시흥시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061743_117/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061743_117/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061743_117/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '43309989362b94b87b695e1656310663',
    },
  },
  {
    ocr: {
      name: '고영빈',
      jumin: '901119-1552913',
      issued_date: '2018.11.27',
      region: '광주광역시 북구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061745_287/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061745_287/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061745_287/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '8790302362b94b8a2707a1656310666',
    },
  },
  {
    ocr: {
      name: '도혜진',
      jumin: '760125-2178418',
      issued_date: '2013.04.26',
      region: '경기도 안양시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061747_878/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061747_878/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061747_878/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '28757779662b94b8cd45161656310668',
    },
  },
  {
    ocr: {
      name: '고지훈',
      jumin: '850413-1328114',
      issued_date: '2017.07.07',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061750_519/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061750_519/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061750_519/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-10-813214-01',
        driver_serial: 'V6GPX0',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '174713239962b94b8f487891656310671',
    },
  },
  {
    ocr: {
      name: '이경희',
      jumin: '770315-2120727',
      issued_date: '2016.04.28',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061752_445/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061752_445/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061752_445/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '12-01-652509-10',
        driver_serial: 'PWWWV4',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '60034462562b94b912cd7f1656310673',
    },
  },
  {
    ocr: {
      name: '김종훈',
      jumin: '800726-1797918',
      issued_date: '2012.11.19',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061754_234/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061754_234/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061754_234/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '경기 05-042167-10',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '97566580662b94b930317f1656310675',
    },
  },
  {
    ocr: {
      name: '서정봉',
      jumin: '770915-1915212',
      issued_date: '2012.01.31',
      region: '경남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061756_255/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061756_255/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061756_255/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '경남 93-111510-72',
        driver_serial: '5147CP',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '204359771862b94b950255e1656310677',
    },
  },
  {
    ocr: {
      name: '박성화',
      jumin: '780215-1057922',
      issued_date: '',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061758_027/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061758_027/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061758_027/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-98-045052-81',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '171462926562b94b96c2be51656310678',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '윤재원',
      jumin: '700131-1026211',
      issued_date: '2012.08.08',
      region: '경기도 안양시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061800_643/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061800_643/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061800_643/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '160389201662b94b99629461656310681',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '신호철',
      jumin: '900914-1095416',
      issued_date: '2016.03.28',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061803_023/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061803_023/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061803_023/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '12-06-629908-50',
        driver_serial: 'WF78OO',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '61281082862b94b9bc832a1656310683',
    },
  },
  {
    ocr: {
      name: '변계영',
      jumin: '950610-2328115',
      issued_date: '2012.07.02',
      region: '인천광역시 부평구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061805_294/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061805_294/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061805_294/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
  },
  {
    ocr: {
      name: '홍서표',
      jumin: '780620-1345923',
      issued_date: '2019.10.28',
      region: '강원지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061807_603/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061807_603/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061807_603/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종대형, 2종보통',
        driver_number: '11-99-667276-44',
        driver_serial: '186VVF',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '131850710062b94ba0669ef1656310688',
    },
  },
  {
    ocr: {
      name: '이운진',
      jumin: '560115-2661220',
      issued_date: '1999.12.16',
      region: '서울특별시 동작구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061809_550/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061809_550/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061809_550/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
  },
  {
    ocr: {
      name: '김덕기',
      jumin: '650809-2019316',
      issued_date: '2000.03.20',
      region: '경기도 남양주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061811_957/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061811_957/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061811_957/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '84969890062b94ba4953f01656310692',
    },
  },
  {
    ocr: {
      name: '지현숙',
      jumin: '760412-2658913',
      issued_date: '2020.09.11',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061814_194/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061814_194/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061814_194/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '18-02-022009-30',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '175438585862b94ba6ca4491656310694',
    },
  },
  {
    ocr: {
      name: '이수미',
      jumin: '660415-2178315',
      issued_date: '2011.06.07',
      region: '인천광역시 계양구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061815_939/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061815_939/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061815_939/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '7746130062b94ba8c22b61656310696',
    },
  },
  {
    ocr: {
      name: '김종화',
      jumin: '720211-1026116',
      issued_date: '',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061818_296/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061818_296/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061818_296/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-05-045210-90',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '7882052562b94bab074221656310699',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '져선미',
      jumin: '810904-2350719',
      issued_date: '2016.10.07',
      region: '충청북도 청주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061820_142/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061820_142/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061820_142/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
  },
  {
    ocr: {
      name: '',
      jumin: '741129-2791912',
      issued_date: '2006.04.10',
      region: '경기도 수원시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061823_024/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061823_024/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061823_024/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
  },
  {
    ocr: {
      name: '강공림',
      jumin: '781001-2095914',
      issued_date: '2019.01.10',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061824_170/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061824_170/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061824_170/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '13-09-658391-20',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '41643052262b94bb0d7aa81656310704',
    },
  },
  {
    ocr: {
      name: '권인희',
      jumin: '791205-2779111',
      issued_date: '2017.04.19',
      region: '경북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061826_045/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061826_045/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061826_045/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '19-02-057967-41',
        driver_serial: 'PYEG6O',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '204393171062b94bb2c99861656310706',
    },
  },
  {
    ocr: {
      name: '상수꾼',
      jumin: '730620-1041319',
      issued_date: '2019.08.05',
      region: '서울특별시 서대문구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061828_050/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061828_050/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061828_050/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '김준배',
      jumin: '860531-1462718',
      issued_date: '',
      region: '충남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061833_155/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061833_155/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061833_155/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종대형',
        driver_number: '충남 05-619487-51',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '4250320962b94bba0bcaf1656310714',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '서재청',
      jumin: '870625-1155612',
      issued_date: '2013.07.09',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061835_277/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061835_277/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061835_277/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 20,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '인천 06-001211-53',
        driver_serial: '2OC2FJ',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '62426828562b94bbc0ec5b1656310716',
    },
  },
  {
    ocr: {
      name: '김민지',
      jumin: '920303-2114016',
      issued_date: '2012.08.29',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061837_146/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061837_146/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061837_146/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 21,
      specular_ratio: 1,
      driver_license: {
        driver_type: '',
        driver_number: '전남 12-067533-00',
        driver_serial: '7223ZO',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '88777561662b94bbdd95371656310717',
    },
  },
  {
    ocr: {
      name: '나호진',
      jumin: '791121-2037719',
      issued_date: '2020.12.17',
      region: '서울특별시 서초구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061838_989/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061838_989/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061838_989/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '16692181262b94bc0088051656310720',
    },
  },
  {
    ocr: {
      name: '장철호',
      jumin: '721008-1168314',
      issued_date: '2015.04.24',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061846_594/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061846_594/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061846_594/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '11-02-200608-50',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '132486672962b94bc76644c1656310727',
    },
  },
  {
    ocr: {
      name: '박태성',
      jumin: '620725-1090919',
      issued_date: '',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061848_598/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061848_598/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061848_598/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '12-88-003658-03',
        driver_serial: 'NDCUUG',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '182522134162b94bc9491e21656310729',
    },
  },
  {
    ocr: {
      name: '정경원',
      jumin: '750119-1785511',
      issued_date: '2016.04.11',
      region: '경북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061850_701/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061850_701/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061850_701/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 21,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '19-95-634487-90',
        driver_serial: '7FR69C',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '6689230262b94bcb6b6cd1656310731',
    },
  },
  {
    ocr: {
      name: '김인석',
      jumin: '660728-1057811',
      issued_date: '2017.05.07',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061852_439/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061852_439/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061852_439/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-89-663633-82',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '14376058762b94bcd435601656310733',
    },
  },
  {
    ocr: {
      name: '구영모',
      jumin: '700710-1463017',
      issued_date: '2019.08.19',
      region: '충청남도 천안시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061854_548/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061854_548/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061854_548/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '213319030262b94bcf84eea1656310735',
    },
  },
  {
    ocr: {
      name: '김정선',
      jumin: '670117-2051127',
      issued_date: '2019.09.24',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061857_124/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061857_124/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061857_124/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-95-825228-83',
        driver_serial: '6GEH2N',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '165638685362b94bd1c81f41656310737',
    },
  },
  {
    ocr: {
      name: '염현정',
      jumin: '840524-2096014',
      issued_date: '2013.01.11',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061858_900/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061858_900/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061858_900/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '부산 03-642755-70',
        driver_serial: '2O65SO',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '199362558562b94bd3a8f861656310739',
    },
  },
  {
    ocr: {
      name: '이수복',
      jumin: '480216-2024816',
      issued_date: '1999.12.18',
      region: '서울특별시 성북구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061900_930/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061900_930/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061900_930/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '135309250262b94bd5ef98c1656310741',
    },
  },
  {
    ocr: {
      name: '박세민',
      jumin: '780118-1075519',
      issued_date: '2021.04.21',
      region: '서울특별시경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061903_654/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061903_654/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061903_654/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '',
        driver_number: '11-95-802134-04',
        driver_serial: '9FUTD4',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '87359733362b94bd861e1b1656310744',
    },
  },
  {
    ocr: {
      name: '정상일',
      jumin: '770412-1183511',
      issued_date: '2015.04.20',
      region: '경기지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061905_652/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061905_652/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061905_652/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '13-15-628479-40',
        driver_serial: '9GWDNY',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '35472687762b94bda577f61656310746',
    },
  },
  {
    ocr: {
      name: '최준성',
      jumin: '860109-1642612',
      issued_date: '2011.12.23',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061907_562/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061907_562/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061907_562/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '전남 04-033369-90',
        driver_serial: '5235QP',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '144910758562b94bdc4984f1656310748',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '한연순',
      jumin: '670224-2538616',
      issued_date: '2019.05.23',
      region: '인천광역시 부평구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061911_170/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061911_170/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061911_170/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '30656804162b94be039f9a1656310752',
    },
  },
  {
    ocr: {
      name: '조경숙',
      jumin: '630306-2411627',
      issued_date: '2006.06.26',
      region: '경기도 안산시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061913_820/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061913_820/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061913_820/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '143026031262b94be27b9691656310754',
    },
  },
  {
    ocr: {
      name: '고이규',
      jumin: '710624-1023317',
      issued_date: '2000.08.28',
      region: '서울특별시 성북구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061916_080/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061916_080/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061916_080/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '72156690762b94be4e83bc1656310756',
    },
  },
  {
    ocr: {
      name: '윤은주',
      jumin: '950920-2561613',
      issued_date: '2013.08.05',
      region: '광주광역시 북구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061918_517/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061918_517/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061918_517/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '159100266662b94be7352341656310759',
    },
  },
  {
    ocr: {
      name: '박정희',
      jumin: '680927-2796514',
      issued_date: '2013.04.09',
      region: '경북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061920_755/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061920_755/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061920_755/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '',
        driver_serial: '5O71QO',
      },
    },
  },
  {
    ocr: {
      name: '김상미',
      jumin: '810926-2912814',
      issued_date: '2013.04.04',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061921_686/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061921_686/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061921_686/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '전남 13-020083-50',
        driver_serial: '7369CO',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '169646124162b94bea6d8e01656310762',
    },
  },
  {
    ocr: {
      name: '김연주',
      jumin: '671129-2121721',
      issued_date: '2017.05.25',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061923_534/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061923_534/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061923_534/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '',
        driver_serial: '',
      },
    },
  },
  {
    ocr: {
      name: '김신영',
      jumin: '710106-2775415',
      issued_date: '2010.03.22',
      region: '인천광역시 계양구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061924_527/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061924_527/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061924_527/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '31878433662b94bed6676e1656310765',
    },
  },
  {
    ocr: {
      name: '유미정',
      jumin: '840104-2250011',
      issued_date: '2004.12.27',
      region: '경기도 용인시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061927_130/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061927_130/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061927_130/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '2783250362b94bf00b75e1656310768',
    },
  },
  {
    ocr: {
      name: '이동근',
      jumin: '611019-1820415',
      issued_date: '2014.09.26',
      region: '경남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061934_558/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061934_558/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061934_558/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종대형',
        driver_number: '20-14-035366-30',
        driver_serial: 'VIPTVZ',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '117920939362b94bf73493f1656310775',
    },
  },
  {
    ocr: {
      name: '윤양수',
      jumin: '761215-1455932',
      issued_date: '2011.07.29',
      region: '대전광역시 서구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061936_159/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061936_159/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061936_159/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '78875714262b94bf9037511656310777',
    },
  },
  {
    ocr: {
      name: '이대우',
      jumin: '771009-1017912',
      issued_date: '2019.03.25',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061938_577/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061938_577/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061938_577/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '11-16-064065-20',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '180769475462b94bfb5dcd71656310779',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '윤광주',
      jumin: '910613-1691319',
      issued_date: '2019.11.04',
      region: '대구광역시 동구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061941_841/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061941_841/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061941_841/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '207094297262b94bfeaae291656310782',
    },
  },
  {
    ocr: {
      name: '최순희',
      jumin: '720416-2109921',
      issued_date: '2014.09.15',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061944_324/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061944_324/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061944_324/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '12-05-015994-11',
        driver_serial: 'D79QVU',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '123992798262b94c010a9ca1656310785',
    },
  },
  {
    ocr: {
      name: '고주애',
      jumin: '810825-2241211',
      issued_date: '2019.01.23',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061946_071/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061946_071/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061946_071/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-09-810069-21',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '21465240362b94c02beda51656310786',
    },
  },
  {
    ocr: {
      name: '안수혜',
      jumin: '811005-2690911',
      issued_date: '2018.09.18',
      region: '대전지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061947_937/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061947_937/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061947_937/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '19-00-013743-53',
        driver_serial: 'UD8V72',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '92461638162b94c04a6e491656310788',
    },
  },
  {
    ocr: {
      name: '김영희',
      jumin: '800126-2851752',
      issued_date: '2021.05.21',
      region: '강원지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061949_658/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061949_658/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061949_658/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '14-16-604756-61',
        driver_serial: '0NU0V2',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '151986785962b94c065a16a1656310790',
    },
  },
  {
    ocr: {
      name: '강지혜',
      jumin: '920101-2224824',
      issued_date: '2020.03.16',
      region: '강원지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061951_538/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061951_538/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061951_538/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '14-20-204147-10',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '34774306662b94c082a6b91656310792',
    },
  },
  {
    ocr: {
      name: '엄호현',
      jumin: '860701-1029311',
      issued_date: '2012.06.20',
      region: '경기지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061953_206/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061953_206/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061953_206/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '서울 05-811566-30',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '147501703462b94c09e6afd1656310793',
    },
  },
  {
    ocr: {
      name: '송해숙',
      jumin: '600609-2777225',
      issued_date: '1999.11.10',
      region: '대구광역시 서구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061954_850/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061954_850/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061954_850/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '177415330162b94c0b7e8481656310795',
    },
  },
  {
    ocr: {
      name: '조영미',
      jumin: '810424-2221225',
      issued_date: '2017.09.07',
      region: '경기북부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061957_014/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061957_014/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061957_014/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-08-813471-10',
        driver_serial: 'PEFP18',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '42381218362b94c0dab9ec1656310797',
    },
  },
  {
    ocr: {
      name: '노정순',
      jumin: '690418-2930418',
      issued_date: '2018.05.03',
      region: '울산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627061958_765/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627061958_765/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627061958_765/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '20-93-056271-11',
        driver_serial: 'FNS6ND',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '209573695562b94c0f78fa81656310799',
    },
  },
  {
    ocr: {
      name: '조소연',
      jumin: '720105-2010218',
      issued_date: '2014.11.14',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062000_714/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062000_714/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062000_714/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '11-92-931763-91',
        driver_serial: 'EPONUO',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '50787522262b94c11614021656310801',
    },
  },
  {
    ocr: {
      name: '강의모',
      jumin: '861110-1237110',
      issued_date: '2012.01.05',
      region: '경기지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062002_641/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062002_641/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062002_641/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '경기 04-669072-80',
        driver_serial: '5237FP',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '67196274462b94c137fdd71656310803',
    },
  },
  {
    ocr: {
      name: '김화경',
      jumin: '760417-2047915',
      issued_date: '2019.07.02',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062004_528/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062004_528/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062004_528/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '11-95-821671-40',
        driver_serial: 'PEP97I',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '132526776362b94c153c6ab1656310805',
    },
  },
  {
    ocr: {
      name: '정지윤',
      jumin: '820113-2496210',
      issued_date: '2018.04.06',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062006_178/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062006_178/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062006_178/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-01-044192-52',
        driver_serial: 'VP28R1',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '44482065862b94c16c9ec51656310806',
    },
  },
  {
    ocr: {
      name: '장인영',
      jumin: '720817-2046515',
      issued_date: '2008.09.10',
      region: '서울특별시 중구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062008_077/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062008_077/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062008_077/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '39932357862b94c18e2e261656310808',
    },
  },
  {
    ocr: {
      name: '김남현',
      jumin: '620209-1030416',
      issued_date: '2017.06.28',
      region: '경기북부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062010_489/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062010_489/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062010_489/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '13-89-839756-31',
        driver_serial: 'UV7ZD1',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '17139766262b94c1b2c19a1656310811',
    },
  },
  {
    ocr: {
      name: '김은화',
      jumin: '750313-2631618',
      issued_date: '2015.06.03',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062012_557/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062012_557/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062012_557/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '18-96-128910-60',
        driver_serial: 'PTOUOC',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '126377767462b94c1d323b51656310813',
    },
  },
  {
    ocr: {
      name: '이순종',
      jumin: '700824-1348415',
      issued_date: '2015.01.12',
      region: '강원도 강릉시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062014_595/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062014_595/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062014_595/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '178549913762b94c1f7118d1656310815',
    },
  },
  {
    ocr: {
      name: '손창현',
      jumin: '731001-1052814',
      issued_date: '2005.12.27',
      region: '서울특별시 은평구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062016_983/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062016_983/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062016_983/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 24,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '139933742862b94c21a2a4b1656310817',
    },
  },
  {
    ocr: {
      name: '이상우',
      jumin: '741211-1670511',
      issued_date: '2015.05.14',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062019_270/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062019_270/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062019_270/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종대형, 2종보통',
        driver_number: '22-91-036663-44',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '98650186662b94c2412c421656310820',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '집혜연',
      jumin: '700608-2120617',
      issued_date: '2017.11.21',
      region: '충남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062023_576/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062023_576/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062023_576/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '23-89-018928-70',
        driver_serial: '5E7OF3',
      },
    },
  },
  {
    ocr: {
      name: '김순덕',
      jumin: '670423-2535328',
      issued_date: '2000.01.23',
      region: '전라북도 군산시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062025_152/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062025_152/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062025_152/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '99082021562b94c29d80841656310825',
    },
  },
  {
    ocr: {
      name: '안우재',
      jumin: '810415-1894718',
      issued_date: '2022.05.30',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062027_451/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062027_451/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062027_451/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '20-00-071357-92',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '78538518562b94c2c3bb8d1656310828',
    },
  },
  {
    ocr: {
      name: '조수연',
      jumin: '891023-2222216',
      issued_date: '2019.04.02',
      region: '경기북부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062029_309/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062029_309/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062029_309/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-09-236015-90',
        driver_serial: '8VN8UI',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '151338606662b94c2e06c771656310830',
    },
  },
  {
    ocr: {
      name: '최윤호',
      jumin: '800125-1162611',
      issued_date: '2018.12.11',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062031_071/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062031_071/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062031_071/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '17-98-032904-91',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '88886371362b94c2faf8a91656310831',
    },
  },
  {
    ocr: {
      name: '황준호',
      jumin: '801012-1011830',
      issued_date: '2013.09.13',
      region: '경기도 양주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062032_695/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062032_695/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062032_695/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '169794387562b94c317049a1656310833',
    },
  },
  {
    ocr: {
      name: '오재훈',
      jumin: '800319-1637217',
      issued_date: '2012.08.13',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062034_998/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062034_998/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062034_998/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '전남 99-014575-72',
        driver_serial: '8855ZP',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '125017799162b94c33bd88c1656310835',
    },
  },
  {
    ocr: {
      name: '이철승',
      jumin: '700209-1143913',
      issued_date: '2010.08.19',
      region: '경기도 용인시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062036_743/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062036_743/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062036_743/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '75551291762b94c35d726c1656310837',
    },
  },
  {
    ocr: {
      name: '정서안',
      jumin: '841019-2400519',
      issued_date: '2020.08.27',
      region: '대전광역시 서구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062039_386/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062039_386/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062039_386/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '2920206462b94c38531f51656310840',
    },
  },
  {
    ocr: {
      name: '얼호준',
      jumin: '750927-1812328',
      issued_date: '2022.04.13',
      region: '경기도 남양주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062042_058/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062042_058/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062042_058/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
  },
  {
    ocr: {
      name: '이인정',
      jumin: '920830-2152516',
      issued_date: '2021.05.06',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062045_032/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062045_032/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062045_032/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '23-11-047262-61',
        driver_serial: '552IUT',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '4459463562b94c3dbbcc81656310845',
    },
  },
  {
    ocr: {
      name: '김진표',
      jumin: '810115-1235313',
      issued_date: '2016.05.25',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062046_785/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062046_785/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062046_785/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종대형, 1종보통',
        driver_number: '11-04-233609-60',
        driver_serial: 'UPOJ7R',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '135877486762b94c3f821d51656310847',
    },
  },
  {
    ocr: {
      name: '이지연',
      jumin: '851027-2415112',
      issued_date: '2018.06.05',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062048_450/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062048_450/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062048_450/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-18-023553-60',
        driver_serial: 'V97PUX',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '123083737962b94c41196b61656310849',
    },
  },
  {
    ocr: {
      name: '김경미',
      jumin: '751011-2574912',
      issued_date: '2016.03.03',
      region: '전라남도 여수시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062050_192/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062050_192/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062050_192/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 17,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '130989629262b94c4302ce31656310851',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '정선희',
      jumin: '700216-2912629',
      issued_date: '2015.08.27',
      region: '경남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062053_860/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062053_860/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062053_860/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '20-95-018240-50',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '17285773262b94c468003e1656310854',
    },
  },
  {
    ocr: {
      name: '조규정',
      jumin: '720701-1058011',
      issued_date: '2013.03.05',
      region: '경기도 안양시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062055_621/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062055_621/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062055_621/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '20938399362b94c486f4161656310856',
    },
  },
  {
    ocr: {
      name: '연규석',
      jumin: '800608-1090917',
      issued_date: '2015.04.13',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062058_321/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062058_321/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062058_321/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-07-052125-11',
        driver_serial: 'EO7IR4',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '174708316562b94c4af2b951656310858',
    },
  },
  {
    ocr: {
      name: '박주성',
      jumin: '911220-1841416',
      issued_date: '2020.09.14',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062100_126/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062100_126/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062100_126/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '12-18-601191-72',
        driver_serial: 'VF7VDP',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '49572713062b94c4ca1d941656310860',
    },
  },
  {
    ocr: {
      name: '김잔종',
      jumin: '881118-1105523',
      issued_date: '2019.11.18',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062106_665/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062106_665/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062106_665/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종대형, 1종보통',
        driver_number: '12-08-603656-70',
        driver_serial: '',
      },
    },
  },
  {
    ocr: {
      name: '서동주',
      jumin: '961205-1476618',
      issued_date: '',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062108_525/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062108_525/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062108_525/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '16-18-606607-11',
        driver_serial: 'D9U1E5',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '7655030062b94c55594921656310869',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '배철호',
      jumin: '790205-1860612',
      issued_date: '2018.05.09',
      region: '경남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062111_812/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062111_812/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062111_812/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '20-98-013008-51',
        driver_serial: '7OEOEV',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '93816048362b94c585abac1656310872',
    },
  },
  {
    ocr: {
      name: '김순이',
      jumin: '590818-2927227',
      issued_date: '',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062113_529/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062113_529/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062113_529/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: false,
      message: 'Issue date is invalid',
      error_code: 'A002',
      transaction_id: '200962330762b94c5a76fc01656310874',
    },
  },
  {
    ocr: {
      name: '배난미',
      jumin: '661005-2772611',
      issued_date: '2017.11.03',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062114_561/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062114_561/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062114_561/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '19-95-001754-11',
        driver_serial: '7N1896',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '7567958262b94c5b2b9551656310875',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '김판준',
      jumin: '830111-1094311',
      issued_date: '2020.09.15',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062118_366/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062118_366/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062118_366/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '12-14-626930-73',
        driver_serial: 'U6FEFS',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '105892092962b94c5eef39b1656310878',
    },
  },
  {
    ocr: {
      name: '이완전',
      jumin: '631025-2548711',
      issued_date: '2016.02.22',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062120_124/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062120_124/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062120_124/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-16-210399-10',
        driver_serial: '6W971D',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '119106038462b94c60abf7c1656310880',
    },
  },
  {
    ocr: {
      name: '양수조',
      jumin: '761005-2069311',
      issued_date: '1999.10.14',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062121_749/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062121_749/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062121_749/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
  },
  {
    ocr: {
      name: '연재용',
      jumin: '840207-1357524',
      issued_date: '2018.04.18',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062124_468/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062124_468/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062124_468/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-03-656623-51',
        driver_serial: 'EH1OGI',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '121747783062b94c6512e791656310885',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '전소연',
      jumin: '700131-2683811',
      issued_date: '2016.08.04',
      region: '경상북도 포항시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062128_020/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062128_020/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062128_020/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 21,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '178068156162b94c68c2b6e1656310888',
    },
  },
  {
    ocr: {
      name: '김태훈',
      jumin: '851104-1094319',
      issued_date: '2014.07.10',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062130_378/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062130_378/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062130_378/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '12-05-607586-92',
        driver_serial: 'V7OFFQ',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '123250393262b94c6aeb07a1656310890',
    },
  },
  {
    ocr: {
      name: '배주영',
      jumin: '750214-2121117',
      issued_date: '2000.03.02',
      region: '부산광역시 해운대구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062131_994/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062131_994/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062131_994/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '25438849762b94c6cbbef91656310892',
    },
  },
  {
    ocr: {
      name: '임세진',
      jumin: '861120-1167715',
      issued_date: '2010.09.06',
      region: '경기도 성남시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062134_350/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062134_350/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062134_350/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 17,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '79283637962b94c6f1affe1656310895',
    },
  },
  {
    ocr: {
      name: '이슬기',
      jumin: '860131-2120610',
      issued_date: '2014.02.12',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062136_964/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062136_964/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062136_964/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '부산 14-604200-70',
        driver_serial: 'VVN87I',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '57217838062b94c71824da1656310897',
    },
  },
  {
    ocr: {
      name: '권경섭',
      jumin: '760705-1814018',
      issued_date: '2015.09.18',
      region: '경북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062138_544/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062138_544/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062138_544/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종대형, 1종보통',
        driver_number: '15-00-604803-92',
        driver_serial: 'HE9UEW',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '42834335562b94c732a39b1656310899',
    },
  },
  {
    ocr: {
      name: '변재희',
      jumin: '801115-2380813',
      issued_date: '2015.03.10',
      region: '충북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062140_179/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062140_179/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062140_179/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '15-00-033911-52',
        driver_serial: 'DVOHU9',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '51706313062b94c75031b41656310901',
    },
  },
  {
    ocr: {
      name: '이미나',
      jumin: '701210-2932133',
      issued_date: '2013.01.21',
      region: '경기도 파주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062142_022/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062142_022/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062142_022/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 27,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '212373345262b94c769727d1656310902',
    },
  },
  {
    ocr: {
      name: '김재현',
      jumin: '840629-1324414',
      issued_date: '2013.08.08',
      region: '강원도 원주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062144_230/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062144_230/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062144_230/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 28,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '43493944662b94c78e88e61656310904',
    },
  },
  {
    ocr: {
      name: '박병천',
      jumin: '830619-1536814',
      issued_date: '2014.02.28',
      region: '경기지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062146_542/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062146_542/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062146_542/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '경기 05-657789-82',
        driver_serial: '9FH177',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '120460488462b94c7b20a811656310907',
    },
  },
  {
    ocr: {
      name: '김혜진',
      jumin: '820226-2808315',
      issued_date: '2016.09.01',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062148_218/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062148_218/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062148_218/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '19-02-010363-11',
        driver_serial: 'PSRU8Q',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '182443603062b94c7cce49d1656310908',
    },
  },
  {
    ocr: {
      name: '유혜경',
      jumin: '830415-2200337',
      issued_date: '2015.07.27',
      region: '경기도 오산시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062149_993/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062149_993/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062149_993/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '155610557262b94c7ebd1b31656310910',
    },
  },
  {
    ocr: {
      name: '이수진',
      jumin: '940716-2162217',
      issued_date: '2018.07.25',
      region: '경기도 화성시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062152_208/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062152_208/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062152_208/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '44206603962b94c8128bb31656310913',
    },
  },
  {
    ocr: {
      name: '박진용',
      jumin: '890426-1038015',
      issued_date: '2019.01.25',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062154_698/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062154_698/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062154_698/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-11-640724-80',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '105217724262b94c8355f001656310915',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '김봉민',
      jumin: '840223-1775421',
      issued_date: '2014.02.11',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062159_485/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062159_485/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062159_485/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '경북 03-015841-03',
        driver_serial: '88DY6O',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '121779966062b94c882dbf21656310920',
    },
  },
  {
    ocr: {
      name: '이창승',
      jumin: '711004-1108911',
      issued_date: '2020.02.05',
      region: '울산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062201_270/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062201_270/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062201_270/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '26-19-015645-71',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '151312293862b94c89cc4351656310921',
    },
  },
  {
    ocr: {
      name: '길태일',
      jumin: '660915-1475730',
      issued_date: '2014.06.18',
      region: '충남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062202_884/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062202_884/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062202_884/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '충남 93-050387-52',
        driver_serial: 'V8TIOI',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '150134803862b94c8ba073b1656310923',
    },
  },
  {
    ocr: {
      name: '김은하',
      jumin: '800826-2647913',
      issued_date: '2014.07.14',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062204_691/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062204_691/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062204_691/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '18-05-020697-00',
        driver_serial: '7UWUUH',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '94751188462b94c8d3fdde1656310925',
    },
  },
  {
    ocr: {
      name: '윤예지',
      jumin: '870220-2157513',
      issued_date: '2016.02.05',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062206_294/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062206_294/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062206_294/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '16-08-616738-10',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '137059670862b94c8ee0a071656310926',
    },
  },
  {
    ocr: {
      name: '이현주',
      jumin: '770110-2041511',
      issued_date: '2015.08.25',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062207_941/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062207_941/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062207_941/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '18-99-034804-52',
        driver_serial: 'OD9SU2',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '155905222862b94c907a1381656310928',
    },
  },
  {
    ocr: {
      name: '수효성',
      jumin: '810105-1012114',
      issued_date: '2016.08.04',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062209_535/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062209_535/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062209_535/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-00-076496-92',
        driver_serial: '',
      },
    },
  },
  {
    ocr: {
      name: '권태형',
      jumin: '801012-1652318',
      issued_date: '2019.03.06',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062211_248/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062211_248/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062211_248/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '11-00-652173-42',
        driver_serial: 'JFPVGS',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '8162820262b94c93d72ae1656310931',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '김진영',
      jumin: '810220-2342321',
      issued_date: '2019.01.21',
      region: '강원지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062216_782/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062216_782/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062216_782/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      driver_license: {
        driver_type: '',
        driver_number: '14-11-608801-50',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '56192070162b94c998543a1656310937',
    },
  },
  {
    ocr: {
      name: '최미리',
      jumin: '890902-2051113',
      issued_date: '2010.01.07',
      region: '서울특별시 금천구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062218_445/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062218_445/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062218_445/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '22429936362b94c9b16dde1656310939',
    },
  },
  {
    ocr: {
      name: '이현정',
      jumin: '770426-2412012',
      issued_date: '2012.11.02',
      region: '경기지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062220_678/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062220_678/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062220_678/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '경기 12-688927-80',
        driver_serial: '5169WO',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '16161612362b94c9d495c91656310941',
    },
  },
  {
    ocr: {
      name: '김병철',
      jumin: '681018-1105222',
      issued_date: '2017.04.21',
      region: '경남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062222_258/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062222_258/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062222_258/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '12-93-010966-60',
        driver_serial: 'V07DUT',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '194840578662b94c9ee49091656310942',
    },
  },
  {
    ocr: {
      name: '탁죄으',
      jumin: '750608-1067911',
      issued_date: '2017.11.24',
      region: '경기도 성남시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062224_184/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062224_184/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062224_184/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
  },
  {
    ocr: {
      name: '김정선',
      jumin: '750407-2655715',
      issued_date: '2016.08.08',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062226_402/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062226_402/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062226_402/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '26-02-008268-31',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '2687350962b94ca2efa861656310946',
    },
  },
  {
    ocr: {
      name: '전영순',
      jumin: '810408-2300310',
      issued_date: '2021.08.26',
      region: '경기도남부경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062228_293/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062228_293/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062228_293/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 19,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '13-08-652425-21',
        driver_serial: 'ERR8S8',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '195386658862b94ca4ed34b1656310948',
    },
  },
  {
    ocr: {
      name: '박수진',
      jumin: '750623-2183412',
      issued_date: '2014.01.16',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062230_295/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062230_295/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062230_295/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '',
        driver_serial: 'PU82OD',
      },
    },
  },
  {
    ocr: {
      name: '진선미',
      jumin: '700325-2347716',
      issued_date: '2014.02.21',
      region: '강원도 삼척시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062231_292/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062231_292/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062231_292/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '80699073262b94ca8038f71656310952',
    },
  },
  {
    ocr: {
      name: '이재덕',
      jumin: '770125-1328618',
      issued_date: '2012.06.12',
      region: '경기지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062233_996/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062233_996/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062233_996/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '강원 99-000676-03',
        driver_serial: '5167QP',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '8129888462b94caab207a1656310954',
    },
  },
  {
    ocr: {
      name: '조일완',
      jumin: '760511-1009117',
      issued_date: '2014.10.10',
      region: '경기지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062236_116/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062236_116/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062236_116/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '11-99-826718-10',
        driver_serial: 'HWN9OJ',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '47735988762b94cacbd8c71656310956',
    },
  },
  {
    ocr: {
      name: '김종숙',
      jumin: '720222-2796011',
      issued_date: '2014.12.19',
      region: '경북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062238_671/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062238_671/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062238_671/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 19,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '22-94-068419-11',
        driver_serial: 'DV6IFV',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '38171468762b94caf492401656310959',
    },
  },
  {
    ocr: {
      name: '이동근',
      jumin: '611019-1820415',
      issued_date: '2014.09.26',
      region: '경남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062240_579/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062240_579/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062240_579/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '',
        driver_number: '20-14-035366-30',
        driver_serial: 'VIPTVZ',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '123102812762b94cb1385df1656310961',
    },
  },
  {
    ocr: {
      name: '모은주',
      jumin: '721130-2542613',
      issued_date: '2013.08.07',
      region: '전북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062242_341/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062242_341/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062242_341/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 19,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '전북 06-012888-60',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '196780485062b94cb2de6ff1656310962',
    },
  },
  {
    ocr: {
      name: '김남희',
      jumin: '711016-2100715',
      issued_date: '2018.03.19',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062243_976/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062243_976/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062243_976/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '12-98-638686-00',
        driver_serial: '6U66N9',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '24203214362b94cb490e751656310964',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '최경철',
      jumin: '740117-1683019',
      issued_date: '2018.02.01',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062247_698/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062247_698/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062247_698/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '19-00-040502-42',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '208862999362b94cb865bf11656310968',
    },
  },
  {
    ocr: {
      name: '박찬현',
      jumin: '760117-1799914',
      issued_date: '2016.02.22',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062249_533/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062249_533/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062249_533/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '19-96-013103-91',
        driver_serial: 'Q7ON7Y',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '92320229662b94cba0e99c1656310970',
    },
  },
  {
    ocr: {
      name: '강진석',
      jumin: '680825-1927229',
      issued_date: '2021.06.25',
      region: '대구광역시 북구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062251_216/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062251_216/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062251_216/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '157772251162b94cbbe50381656310971',
    },
  },
  {
    ocr: {
      name: '',
      jumin: '740830-2919111',
      issued_date: '',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062253_730/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062253_730/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062253_730/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '12-00-032288-11',
        driver_serial: '',
      },
    },
  },
  {
    ocr: {
      name: '이경미',
      jumin: '740807-2452415',
      issued_date: '2012.09.18',
      region: '충청남도 천안시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062255_634/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062255_634/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062255_634/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '27919868362b94cc0558311656310976',
    },
  },
  {
    ocr: {
      name: '유은주',
      jumin: '710622-2540519',
      issued_date: '2007.03.09',
      region: '서울특별시 양천구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062258_008/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062258_008/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062258_008/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '14290448462b94cc2ddb351656310978',
    },
  },
  {
    ocr: {
      name: '장진동',
      jumin: '860216-1814615',
      issued_date: '2012.08.10',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062300_685/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062300_685/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062300_685/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '충북 04-606227-81',
        driver_serial: '5249AP',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '210955495962b94cc5510d01656310981',
    },
  },
  {
    ocr: {
      name: '선형숙',
      jumin: '730902-2575714',
      issued_date: '',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062302_367/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062302_367/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062302_367/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '',
        driver_number: '전남 04-056034-81',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '184525039962b94cc7081051656310983',
    },
  },
  {
    ocr: {
      name: '서은숙',
      jumin: '731003-2785514',
      issued_date: '2020.12.21',
      region: '경상북도 경주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062304_528/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062304_528/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062304_528/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '79024899062b94cc9234ac1656310985',
    },
  },
  {
    ocr: {
      name: '김상민',
      jumin: '910303-1046515',
      issued_date: '2019.06.27',
      region: '인천광역시 연수구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062307_295/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062307_295/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062307_295/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '118202732862b94ccc386321656310988',
    },
  },
  {
    ocr: {
      name: '김정훈',
      jumin: '770422-1348011',
      issued_date: '2014.11.19',
      region: '경기도 평택시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062309_873/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062309_873/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062309_873/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '57953748562b94cce74a181656310990',
    },
  },
  {
    ocr: {
      name: '이효수',
      jumin: '920108-1621913',
      issued_date: '2013.02.01',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062312_062/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062312_062/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062312_062/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종소형',
        driver_number: '전남 08-049602-32',
        driver_serial: '7233QP',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '128864566062b94cd0ee04f1656310992',
    },
  },
  {
    ocr: {
      name: '김태욱',
      jumin: '960306-1865516',
      issued_date: '2013.04.08',
      region: '경상남도 김해시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062314_227/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062314_227/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062314_227/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 24,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '213824335562b94cd2c69f61656310994',
    },
  },
  {
    ocr: {
      name: '함태종',
      jumin: '661125-1148611',
      issued_date: '2010.05.14',
      region: '인천광역시 부평구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062316_450/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062316_450/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062316_450/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '200157102062b94cd54c2611656310997',
    },
  },
  {
    ocr: {
      name: '강인구',
      jumin: '750615-1474220',
      issued_date: '2018.05.31',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062318_918/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062318_918/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062318_918/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '16-01-004468-22',
        driver_serial: '72P9DE',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '190199032162b94cd782c1c1656310999',
    },
  },
  {
    ocr: {
      name: '이수연',
      jumin: '801012-1268110',
      issued_date: '2019.11.12',
      region: '강원도 원주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062320_853/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062320_853/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062320_853/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '87373994962b94cd9830aa1656311001',
    },
  },
  {
    ocr: {
      name: '전종성',
      jumin: '780502-1394914',
      issued_date: '2022.02.14',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062323_450/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062323_450/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062323_450/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '13-97-016302-86',
        driver_serial: 'EK8V8Z',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '133914729962b94cdc480f81656311004',
    },
  },
  {
    ocr: {
      name: '김상미',
      jumin: '741104-2163017',
      issued_date: '2021.12.07',
      region: '인천광역시 서구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062325_519/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062325_519/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062325_519/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 16,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '90435693762b94cde3e5da1656311006',
    },
  },
  {
    ocr: {
      name: '유혜경',
      jumin: '791215-2542811',
      issued_date: '1999.10.06',
      region: '전라북도 김제시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062327_898/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062327_898/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062327_898/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '127534168362b94ce0772961656311008',
    },
  },
  {
    ocr: {
      name: '저츠',
      jumin: '630620-2117239',
      issued_date: '',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062330_128/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062330_128/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062330_128/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: false,
      message: 'Issue date is invalid',
      error_code: 'A002',
      transaction_id: '145907824262b94ce3be5261656311011',
    },
  },
  {
    ocr: {
      name: '김묘순',
      jumin: '680713-2352013',
      issued_date: '2017.11.08',
      region: '충북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062332_014/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062332_014/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062332_014/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '15-99-007763-61',
        driver_serial: '9O1798',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '3501996062b94ce48e03f1656311012',
    },
  },
  {
    ocr: {
      name: '이경화',
      jumin: '830223-2914216',
      issued_date: '2017.05.23',
      region: '경상남도 고성군수',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062333_743/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062333_743/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062333_743/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '161692066062b94ce689f551656311014',
    },
  },
  {
    ocr: {
      name: '임태훈',
      jumin: '870317-1495617',
      issued_date: '2013.12.10',
      region: '서울특별시 강북구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062336_135/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062336_135/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062336_135/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '157808487762b94ce8b3ab11656311016',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '정만순',
      jumin: '870515-1237516',
      issued_date: '',
      region: '경기지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062339_731/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062339_731/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062339_731/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '13-15-667561-10',
        driver_serial: 'ZUXNNU',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '169247595162b94cec646071656311020',
    },
  },
  {
    ocr: {
      name: '유상지',
      jumin: '760526-2654220',
      issued_date: '2019.03.08',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062341_660/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062341_660/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062341_660/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '17-98-010821-92',
        driver_serial: 'OV9E9P',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '50928146562b94cee3e58e1656311022',
    },
  },
  {
    ocr: {
      name: '홍동화',
      jumin: '870616-2684813',
      issued_date: '2004.12.24',
      region: '대구광역시 북구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062343_524/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062343_524/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062343_524/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '93741188462b94cf0889da1656311024',
    },
  },
  {
    ocr: {
      name: '은민기',
      jumin: '810111-1789810',
      issued_date: '2015.05.29',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062346_126/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062346_126/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062346_126/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '22-08-008477-00',
        driver_serial: 'OG6O9N',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '104518641262b94cf2c3dcb1656311026',
    },
  },
  {
    ocr: {
      name: '최남석',
      jumin: '711012-1622013',
      issued_date: '2004.04.02',
      region: '광주광역시 광산구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062348_242/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062348_242/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062348_242/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 27,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '187198372362b94cf5300901656311029',
    },
  },
  {
    ocr: {
      name: '리연아',
      jumin: '670915-2637623',
      issued_date: '',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062350_891/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062350_891/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062350_891/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '18-96-088186-00',
        driver_serial: '',
      },
    },
  },
  {
    ocr: {
      name: '안병길',
      jumin: '810204-1069011',
      issued_date: '2016.10.27',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062353_047/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062353_047/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062353_047/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종대형, 2종보통',
        driver_number: '13-12-634067-50',
        driver_serial: 'F8HE8U',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '128915535462b94cf9b4b9d1656311033',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '김주범',
      jumin: '821025-1790318',
      issued_date: '2015.12.24',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062356_852/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062356_852/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062356_852/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '22-01-049928-10',
        driver_serial: 'V7WJVC',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '110100047762b94cfd7e4101656311037',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '강현듯',
      jumin: '800812-1483217',
      issued_date: '',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062400_184/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062400_184/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062400_184/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '',
        driver_serial: '',
      },
    },
  },
  {
    ocr: {
      name: '곽안나',
      jumin: '680820-2005830',
      issued_date: '2022.03.18',
      region: '경기북부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062401_206/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062401_206/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062401_206/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '19-22-003141-70',
        driver_serial: 'R7EGDF',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '67416010162b94d01d0e821656311041',
    },
  },
  {
    ocr: {
      name: '김미애',
      jumin: '631208-2483216',
      issued_date: '2013.05.16',
      region: '울산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062403_001/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062403_001/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062403_001/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '울산 13-009959-30',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '126460742562b94d03a89ea1656311043',
    },
  },
  {
    ocr: {
      name: '김소희',
      jumin: '750122-2267715',
      issued_date: '2021.01.29',
      region: '인천광역시 부평구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062404_933/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062404_933/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062404_933/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '35252658462b94d057b7c51656311045',
    },
  },
  {
    ocr: {
      name: '전수빈',
      jumin: '620228-2268223',
      issued_date: '2019.02.19',
      region: '경기도 안산시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062407_322/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062407_322/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062407_322/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 18,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '64142760162b94d0825dc21656311048',
    },
  },
  {
    ocr: {
      name: '박진영',
      jumin: '911103-2520416',
      issued_date: '2009.02.27',
      region: '전라북도 전주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062409_768/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062409_768/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062409_768/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 19,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '3489260062b94d0a797f01656311050',
    },
  },
  {
    ocr: {
      name: '김인자',
      jumin: '640625-2257816',
      issued_date: '2018.11.19',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062412_254/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062412_254/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062412_254/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '11-00-040132-80',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '20665617362b94d0cdf1a81656311052',
    },
  },
  {
    ocr: {
      name: '박한복',
      jumin: '690220-2752111',
      issued_date: '',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062414_130/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062414_130/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062414_130/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '',
        driver_serial: '',
      },
    },
  },
  {
    ocr: {
      name: '최하은',
      jumin: '911106-2093118',
      issued_date: '2021.04.01',
      region: '경기도 이천시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062415_859/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062415_859/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062415_859/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '144014352762b94d1073e6e1656311056',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '김대환',
      jumin: '810301-1227028',
      issued_date: '2014.03.10',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062419_751/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062419_751/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062419_751/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '서울 99-238396-60',
        driver_serial: 'EHTETB',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '339355662b94d145cbb21656311060',
    },
  },
  {
    ocr: {
      name: '조인휘',
      jumin: '791224-1224721',
      issued_date: '2020.12.31',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062421_520/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062421_520/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062421_520/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '18-11-018002-60',
        driver_serial: 'F0EV64',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '43296590062b94d1619f6d1656311062',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '백종현',
      jumin: '860805-1113534',
      issued_date: '2016.09.23',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062430_064/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062430_064/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062430_064/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '12-09-012471-40',
        driver_serial: '2F6WTC',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '95467851662b94d1eb379b1656311070',
    },
  },
  {
    ocr: {
      name: '원명숙',
      jumin: '730415-2080117',
      issued_date: '2016.03.15',
      region: '경북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062432_287/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062432_287/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062432_287/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-01-084261-00',
        driver_serial: 'E97DWD',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '70988041862b94d20e26791656311072',
    },
  },
  {
    ocr: {
      name: '장윤정',
      jumin: '670120-2067448',
      issued_date: '2017.02.13',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062434_267/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062434_267/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062434_267/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 20,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-93-706744-10',
        driver_serial: '1XUNWL',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '114748738062b94d22cbbbd1656311074',
    },
  },
  {
    ocr: {
      name: '한상호',
      jumin: '680809-1536511',
      issued_date: '2012.02.17',
      region: '전라북도 전주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062435_958/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062435_958/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062435_958/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '150746838662b94d24bd04b1656311076',
    },
  },
  {
    ocr: {
      name: '김은혜',
      jumin: '830714-2079713',
      issued_date: '2012.03.20',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062438_375/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062438_375/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062438_375/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '서울 04-646880-01',
        driver_serial: '3645EO',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '103870618762b94d2708e531656311079',
    },
  },
  {
    ocr: {
      name: '윤영웅',
      jumin: '731015-1036111',
      issued_date: '',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062440_234/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062440_234/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062440_234/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '',
        driver_serial: '',
      },
    },
  },
  {
    ocr: {
      name: '김명규',
      jumin: '970305-1167618',
      issued_date: '2014.04.02',
      region: '전라북도 정읍시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062441_609/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062441_609/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062441_609/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '98292601662b94d2a418da1656311082',
    },
  },
  {
    ocr: {
      name: '최윤아',
      jumin: '900120-2236828',
      issued_date: '2014.12.09',
      region: '경기지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062443_857/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062443_857/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062443_857/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '13-12-677842-00',
        driver_serial: 'GV6I6U',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '49064576162b94d2c8d19a1656311084',
    },
  },
  {
    ocr: {
      name: '오재인',
      jumin: '741222-1037911',
      issued_date: '2020.12.10',
      region: '서울특별시 양천구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062445_848/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062445_848/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062445_848/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '169260881062b94d2ec150a1656311086',
    },
  },
  {
    ocr: {
      name: '이상규',
      jumin: '760905-1915510',
      issued_date: '2014.11.10',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062448_393/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062448_393/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062448_393/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 17,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '20-06-038451-50',
        driver_serial: '86OVF4',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '210412181962b94d31040e41656311089',
    },
  },
  {
    ocr: {
      name: '강은미',
      jumin: '850122-2029316',
      issued_date: '2021.11.30',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062450_386/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062450_386/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062450_386/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-06-837645-22',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '132283949962b94d32ef3491656311090',
    },
  },
  {
    ocr: {
      name: '김민수',
      jumin: '770513-1068615',
      issued_date: '2018.11.12',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062452_402/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062452_402/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062452_402/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 21,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종소형',
        driver_number: '11-93-108800-92',
        driver_serial: 'U1FT77',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '25058269662b94d352e4fc1656311093',
    },
  },
  {
    ocr: {
      name: '이성배',
      jumin: '750905-1048117',
      issued_date: '2014.12.10',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062454_524/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062454_524/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062454_524/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 18,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-95-280917-62',
        driver_serial: 'WFOV8E',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '22035840262b94d371289e1656311095',
    },
  },
  {
    ocr: {
      name: '윤혜진',
      jumin: '831125-2918918',
      issued_date: '2015.04.02',
      region: '부산광역시 사상구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062456_503/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062456_503/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062456_503/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '63844347562b94d39187d21656311097',
    },
  },
  {
    ocr: {
      name: '김미선',
      jumin: '671027-2024317',
      issued_date: '2000.03.26',
      region: '경기도 파주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062458_676/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062458_676/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062458_676/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 19,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '49622142962b94d3b354c41656311099',
    },
  },
  {
    ocr: {
      name: '김주삼',
      jumin: '720203-1474518',
      issued_date: '2006.07.24',
      region: '충청남도 당진시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062500_808/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062500_808/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062500_808/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 19,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '134637604162b94d3d8a7f71656311101',
    },
  },
  {
    ocr: {
      name: '최진국',
      jumin: '780206-1000711',
      issued_date: '2016.01.11',
      region: '제주지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062503_333/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062503_333/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062503_333/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '21-15-005566-91',
        driver_serial: 'U9TOWW',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '8527038162b94d3fe2f4b1656311103',
    },
  },
  {
    ocr: {
      name: '임충완',
      jumin: '720529-1905834',
      issued_date: '2016.10.31',
      region: '경남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062505_350/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062505_350/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062505_350/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '20-95-123474-71',
        driver_serial: 'WEH8FO',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '143152374862b94d4245f661656311106',
    },
  },
  {
    ocr: {
      name: '이혁재',
      jumin: '720131-1051812',
      issued_date: '2014.12.02',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062507_526/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062507_526/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062507_526/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '',
        driver_number: '14-05-006220-10',
        driver_serial: '66TP9O',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '68359711262b94d442354e1656311108',
    },
  },
  {
    ocr: {
      name: '김길남',
      jumin: '681125-1010013',
      issued_date: '2015.05.22',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062509_274/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062509_274/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062509_274/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '13-01-619303-32',
        driver_serial: 'FFPONX',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '169705397762b94d45cad471656311109',
    },
  },
  {
    ocr: {
      name: '신진철',
      jumin: '820203-1122029',
      issued_date: '2016.08.18',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062510_928/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062510_928/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062510_928/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종대형, 1종보통, 특수',
        driver_number: '12-00-012180-42',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '139478014762b94d47c84aa1656311111',
    },
  },
  {
    ocr: {
      name: '김보섭',
      jumin: '700312-1037511',
      issued_date: '2016.07.27',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062513_126/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062513_126/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062513_126/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-93-729499-80',
        driver_serial: '2IS9PU',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '148525669562b94d49b83a11656311113',
    },
  },
  {
    ocr: {
      name: '김형수',
      jumin: '700226-1056813',
      issued_date: '2004.11.08',
      region: '경기도 용인시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062514_986/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062514_986/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062514_986/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 21,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '214292018462b94d4b817961656311115',
    },
  },
  {
    ocr: {
      name: '김은하',
      jumin: '800826-2647913',
      issued_date: '2014.07.14',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062517_142/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062517_142/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062517_142/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '18-05-020697-00',
        driver_serial: '7UWUUH',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '94205954962b94d4db5d451656311117',
    },
  },
  {
    ocr: {
      name: '정사라',
      jumin: '660101-2350811',
      issued_date: '2014.02.24',
      region: '충북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062518_943/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062518_943/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062518_943/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 1,
      driver_license: {
        driver_type: '',
        driver_number: '',
        driver_serial: '286EUS',
      },
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '황치국',
      jumin: '930825-1185211',
      issued_date: '2020.12.07',
      region: '경기도 부천시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062521_498/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062521_498/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062521_498/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '128175889962b94d52467ea1656311122',
    },
  },
  {
    ocr: {
      name: '송영심',
      jumin: '711014-2122521',
      issued_date: '2018.03.19',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062523_980/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062523_980/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062523_980/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '12-93-602865-60',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '192129866162b94d5496d3c1656311124',
    },
  },
  {
    ocr: {
      name: '김미순',
      jumin: '691129-2812316',
      issued_date: '2003.07.29',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062525_830/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062525_830/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062525_830/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '73065128362b94d5776d281656311127',
    },
  },
  {
    ocr: {
      name: '우순이',
      jumin: '701003-2332832',
      issued_date: '2004.10.15',
      region: '경기도 안양시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062529_315/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062529_315/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062529_315/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 19,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '129626247862b94d5a1188f1656311130',
    },
  },
  {
    ocr: {
      name: '김정희',
      jumin: '710315-2117219',
      issued_date: '2002.10.18',
      region: '울산광역시 남구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062531_652/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062531_652/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062531_652/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '171068689762b94d5c5ef1e1656311132',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '변영권',
      jumin: '810502-1025511',
      issued_date: '2016.05.13',
      region: '강원지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062536_603/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062536_603/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062536_603/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '14-01-214795-21',
        driver_serial: '99E897',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '118495735262b94d61215ef1656311137',
    },
  },
  {
    ocr: {
      name: '장정규',
      jumin: '681020-1822711',
      issued_date: '2016.03.10',
      region: '경남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062538_296/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062538_296/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062538_296/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '20-92-111911-41',
        driver_serial: 'F1FVF5',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '122384485862b94d62d1bbf1656311138',
    },
  },
  {
    ocr: {
      name: '김혜진',
      jumin: '810310-2637123',
      issued_date: '2009.02.20',
      region: '경기도 수원시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062540_055/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062540_055/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062540_055/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '63403411862b94d64a74c11656311140',
    },
  },
  {
    ocr: {
      name: '한승훈',
      jumin: '800901-1260618',
      issued_date: '',
      region: '강원도 춘천시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062542_298/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062542_298/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062542_298/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: false,
      message: 'Issue date is invalid',
      error_code: 'A002',
      transaction_id: '25620158862b94d670de851656311143',
    },
  },
  {
    ocr: {
      name: '김해경',
      jumin: '681123-2790316',
      issued_date: '2018.06.01',
      region: '경북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062543_447/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062543_447/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062543_447/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '19-91-061070-91',
        driver_serial: 'OD2DG6',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '103221677162b94d68133db1656311144',
    },
  },
  {
    ocr: {
      name: '정진하',
      jumin: '841023-1076437',
      issued_date: '2012.07.26',
      region: '제주특별자치도지사',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062545_301/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062545_301/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062545_301/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '14762878962b94d69ce0431656311145',
    },
  },
  {
    ocr: {
      name: '김혜인',
      jumin: '931219-2032918',
      issued_date: '2012.06.29',
      region: '서울특별시 마포구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062547_616/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062547_616/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062547_616/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '18675949262b94d6c745ff1656311148',
    },
  },
  {
    ocr: {
      name: '박정순',
      jumin: '781110-2455211',
      issued_date: '2015.04.14',
      region: '충남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062550_044/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062550_044/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062550_044/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '16-00-637049-50',
        driver_serial: '8EDPNV',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '180181470962b94d6e9dc621656311150',
    },
  },
  {
    ocr: {
      name: '김종만',
      jumin: '710115-1921331',
      issued_date: '2007.07.23',
      region: '경상남도 창원시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062551_839/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062551_839/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062551_839/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '181392539462b94d7085d4b1656311152',
    },
  },
  {
    ocr: {
      name: '이진경',
      jumin: '901006-2555415',
      issued_date: '2016.08.18',
      region: '경북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062554_219/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062554_219/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062554_219/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '18-09-027117-30',
        driver_serial: 'O7S88D',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '22768838162b94d72b9be71656311154',
    },
  },
  {
    ocr: {
      name: '박정구',
      jumin: '800713-1849918',
      issued_date: '2000.01.08',
      region: '울산광역시 중구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062556_185/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062556_185/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062556_185/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '33043188962b94d7513ca41656311157',
    },
  },
  {
    ocr: {
      name: '최신호',
      jumin: '710504-1690324',
      issued_date: '2000.02.23',
      region: '대구광역시 수성구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062558_674/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062558_674/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062558_674/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '124708579762b94d77907ad1656311159',
    },
  },
  {
    ocr: {
      name: '김신환',
      jumin: '730610-1644023',
      issued_date: '2015.12.17',
      region: '경기지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062601_307/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062601_307/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062601_307/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '18-92-074963-21',
        driver_serial: '6GDENU',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '112637577262b94d7a0a5d61656311162',
    },
  },
  {
    ocr: {
      name: '배종구',
      jumin: '841213-1096013',
      issued_date: '2019.01.14',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062603_269/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062603_269/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062603_269/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '12-19-600998-70',
        driver_serial: 'UHI9FI',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '134695905662b94d7bdee1b1656311163',
    },
  },
  {
    ocr: {
      name: '정문석',
      jumin: '600913-1067910',
      issued_date: '2017.01.05',
      region: '경기도 오산시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062605_174/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062605_174/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062605_174/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '171895378962b94d7df0e6d1656311165',
    },
  },
  {
    ocr: {
      name: '김중철',
      jumin: '780210-1772516',
      issued_date: '',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062607_617/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062607_617/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062607_617/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '19-00-052013-00',
        driver_serial: 'ENDSFB',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '113334763962b94d805487a1656311168',
    },
  },
  {
    ocr: {
      name: '김지훈',
      jumin: '731220-1538913',
      issued_date: '2013.03.21',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062609_491/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062609_491/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062609_491/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종대형, 1종보통',
        driver_number: '서울 92-905946-80',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '44513426462b94d824cd541656311170',
    },
  },
  {
    ocr: {
      name: '정광래',
      jumin: '781011-1343617',
      issued_date: '2018.12.17',
      region: '강원지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062611_484/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062611_484/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062611_484/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 20,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '14-15-211747-51',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '152811116062b94d846baa51656311172',
    },
  },
  {
    ocr: {
      name: '백미라',
      jumin: '810215-2349027',
      issued_date: '2016.12.27',
      region: '강원지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062613_671/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062613_671/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062613_671/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '14-16-611453-40',
        driver_serial: 'O8EG8I',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '121901835362b94d865ea831656311174',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '김재용',
      jumin: '770920-1011117',
      issued_date: '2009.11.18',
      region: '서울특별시 용산구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062615_594/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062615_594/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062615_594/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '142906486862b94d884ea441656311176',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '최석',
      jumin: '800320-1710011',
      issued_date: '2005.06.29',
      region: '경상북도 경주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062618_838/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062618_838/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062618_838/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '25151689762b94d8b7fb271656311179',
    },
  },
  {
    ocr: {
      name: '최선미',
      jumin: '730203-2347945',
      issued_date: '2019.06.04',
      region: '경북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062621_133/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062621_133/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062621_133/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '19-95-620811-10',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '19795867762b94d8dd87421656311181',
    },
  },
  {
    ocr: {
      name: '김도령',
      jumin: '810814-1328126',
      issued_date: '2015.01.28',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062623_157/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062623_157/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062623_157/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '14-00-615184-00',
        driver_serial: '11FO9X',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '159499325362b94d90566261656311184',
    },
  },
  {
    ocr: {
      name: '김해영',
      jumin: '821112-2657510',
      issued_date: '2016.02.16',
      region: '전라남도 구례군수',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062625_484/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062625_484/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062625_484/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 28,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '16071175862b94d924ed7f1656311186',
    },
  },
  {
    ocr: {
      name: '권정미',
      jumin: '701111-2031325',
      issued_date: '2017.11.03',
      region: '서울특별시 도봉구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062628_019/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062628_019/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062628_019/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '52488800362b94d94e64ce1656311188',
    },
  },
  {
    ocr: {
      name: '이송',
      jumin: '730321-1477910',
      issued_date: '2008.11.05',
      region: '대전광역시 대덕구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062630_844/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062630_844/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062630_844/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '129967039962b94d97e9f071656311191',
    },
  },
  {
    ocr: {
      name: '정순이',
      jumin: '601020-2113819',
      issued_date: '2021.05.18',
      region: '서울특별시 용산구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062633_672/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062633_672/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062633_672/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '5743895962b94d9a8e5d21656311194',
    },
  },
  {
    ocr: {
      name: '김선심',
      jumin: '800914-2652828',
      issued_date: '2014.03.26',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062636_198/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062636_198/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062636_198/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '전남 06-044391-60',
        driver_serial: 'FH88JF',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '147400662762b94d9d01fb11656311197',
    },
  },
  {
    ocr: {
      name: '임완희',
      jumin: '800604-2057016',
      issued_date: '2020.04.08',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062638_389/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062638_389/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062638_389/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-01-675120-41',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '120123387162b94d9f0804d1656311199',
    },
  },
  {
    ocr: {
      name: '김효숙',
      jumin: '701005-2535611',
      issued_date: '2014.11.07',
      region: '전북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062640_218/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062640_218/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062640_218/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 18,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '17-14-030997-40',
        driver_serial: 'FGTFN6',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '174226041762b94da0d138d1656311200',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '김연희',
      jumin: '711128-2551216',
      issued_date: '2019.06.10',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062644_010/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062644_010/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062644_010/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 21,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-99-072276-70',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '28696446362b94da4b2a7a1656311204',
    },
  },
  {
    ocr: {
      name: '김성호',
      jumin: '640621-1899112',
      issued_date: '2015.09.10',
      region: '경남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062646_090/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062646_090/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062646_090/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '20-84-003437-95',
        driver_serial: 'F9EPJX',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '34622250762b94da6b06181656311206',
    },
  },
  {
    ocr: {
      name: '공종석',
      jumin: '791127-1685619',
      issued_date: '2018.06.29',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062648_027/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062648_027/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062648_027/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '22-01-044122-00',
        driver_serial: 'FD15GL',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '207050023162b94da8c16dd1656311208',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '김인자',
      jumin: '570423-2326011',
      issued_date: '2015.05.07',
      region: '경북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062651_796/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062651_796/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062651_796/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '19-95-065292-31',
        driver_serial: 'ONF961',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '81329441662b94dac6933a1656311212',
    },
  },
  {
    ocr: {
      name: '김현주',
      jumin: '731112-2067521',
      issued_date: '2019.02.07',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062653_776/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062653_776/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062653_776/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-09-231247-80',
        driver_serial: 'UUHEFG',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '147806399262b94dae7a2901656311214',
    },
  },
  {
    ocr: {
      name: '신보희',
      jumin: '750725-2781518',
      issued_date: '2014.06.09',
      region: '경북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062655_675/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062655_675/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062655_675/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 21,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '경북 04-619245-32',
        driver_serial: '72QUV4',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '115326136062b94db06b1d61656311216',
    },
  },
  {
    ocr: {
      name: '최두리',
      jumin: '910217-2555116',
      issued_date: '2017.10.16',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062657_689/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062657_689/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062657_689/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '18-14-041733-41',
        driver_serial: 'N91VUW',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '129241591262b94db25c2281656311218',
    },
  },
  {
    ocr: {
      name: '김금숙',
      jumin: '580527-2525014',
      issued_date: '2000.01.20',
      region: '경상남도 산청군수',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062659_778/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062659_778/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062659_778/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 19,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '196713675362b94db4b35fb1656311220',
    },
  },
  {
    ocr: {
      name: '김지용',
      jumin: '840125-1853131',
      issued_date: '2016.06.28',
      region: '울산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062702_554/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062702_554/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062702_554/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 21,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종대형, 1종보통',
        driver_number: '26-02-026543-82',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '212615699262b94db744d9b1656311223',
    },
  },
  {
    ocr: {
      name: '김정아',
      jumin: '980103-2171016',
      issued_date: '2018.12.10',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062704_359/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062704_359/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062704_359/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '13-18-662989-10',
        driver_serial: 'F9DVE0',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '31639152462b94db917c291656311225',
    },
  },
  {
    ocr: {
      name: '박정희',
      jumin: '660326-2646318',
      issued_date: '2013.11.22',
      region: '경기지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062706_258/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062706_258/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062706_258/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '경기 13-658690-50',
        driver_serial: 'DFU8P9',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '101400214162b94dbb0590a1656311227',
    },
  },
  {
    ocr: {
      name: '주윤종',
      jumin: '771210-2079612',
      issued_date: '2019.08.14',
      region: '인천광역시 서구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062708_262/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062708_262/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062708_262/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '149587327962b94dbd4e0d91656311229',
    },
  },
  {
    ocr: {
      name: '김윤희',
      jumin: '830726-2222119',
      issued_date: '2018.03.30',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062711_026/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062711_026/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062711_026/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 21,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '14-08-211029-40',
        driver_serial: 'DON907',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '204656492862b94dbfb6fae1656311231',
    },
  },
  {
    ocr: {
      name: '변은지',
      jumin: '840603-2157814',
      issued_date: '2003.01.23',
      region: '인천광역시 서구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062712_975/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062712_975/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062712_975/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '50566003262b94dc1c55c61656311233',
    },
  },
  {
    ocr: {
      name: '선형숙',
      jumin: '730902-2575714',
      issued_date: '2014.02.06',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062715_403/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062715_403/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062715_403/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '전남 04-056034-81',
        driver_serial: '6V8F97',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '29212919962b94dc41f43e1656311236',
    },
  },
  {
    ocr: {
      name: '최재님',
      jumin: '520920-2656923',
      issued_date: '2000.03.27',
      region: '경기도 고양시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062717_446/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062717_446/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062717_446/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 20,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '98193243362b94dc624c401656311238',
    },
  },
  {
    ocr: {
      name: '주용범',
      jumin: '800226-1173615',
      issued_date: '2016.06.15',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062719_776/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062719_776/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062719_776/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '13-01-873013-10',
        driver_serial: 'I9DFVO',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '179194007062b94dc875cba1656311240',
    },
  },
  {
    ocr: {
      name: '홍순문',
      jumin: '810817-1235324',
      issued_date: '2014.11.19',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062726_778/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062726_778/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062726_778/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-00-629526-11',
        driver_serial: '8PH96D',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '10769953262b94dcf6f2281656311247',
    },
  },
  {
    ocr: {
      name: '홍은희',
      jumin: '650915-2852526',
      issued_date: '2013.10.31',
      region: '충남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062728_737/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062728_737/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062728_737/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '충남 92-092713-93',
        driver_serial: 'FLDSOW',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '68950173562b94dd1871751656311249',
    },
  },
  {
    ocr: {
      name: '정은애',
      jumin: '650426-2268310',
      issued_date: '2018.07.17',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062730_669/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062730_669/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062730_669/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '23-94-051537-83',
        driver_serial: '9UOUET',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '196125155062b94dd344abf1656311251',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '김재관',
      jumin: '720712-1029813',
      issued_date: '2018.07.11',
      region: '인천광역시 서구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062734_970/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062734_970/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062734_970/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '43377725262b94dd81ac371656311256',
    },
  },
  {
    ocr: {
      name: '박시형',
      jumin: '891117-1683415',
      issued_date: '',
      region: '대구광역시 달서구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062738_040/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062738_040/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062738_040/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: false,
      found_face: 0,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: false,
      message: 'Issue date is invalid',
      error_code: 'A002',
      transaction_id: '54677271562b94ddb0c7eb1656311259',
    },
  },
  {
    ocr: {
      name: '박미영',
      jumin: '750710-2168210',
      issued_date: '2005.01.06',
      region: '경기도 안산시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062739_354/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062739_354/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062739_354/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '120008577162b94ddc1b6901656311260',
    },
  },
  {
    ocr: {
      name: '정현수',
      jumin: '820607-1558218',
      issued_date: '2014.10.16',
      region: '광주광역시 광산구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062741_770/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062741_770/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062741_770/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
  },
  {
    ocr: {
      name: '곡혜정',
      jumin: '720227-2114226',
      issued_date: '2019.11.15',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062744_364/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062744_364/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062744_364/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '11-01-637012-01',
        driver_serial: '',
      },
    },
  },
  {
    ocr: {
      name: '이은선',
      jumin: '790425-2567611',
      issued_date: '2012.10.26',
      region: '경기도 남양주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062746_298/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062746_298/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062746_298/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '161021393062b94de327cec1656311267',
    },
  },
  {
    ocr: {
      name: '주수민',
      jumin: '860926-1446812',
      issued_date: '2013.04.16',
      region: '대전지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062748_878/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062748_878/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062748_878/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '',
        driver_number: '충남 06-002981-80',
        driver_serial: '5289QP',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '12838541762b94de5b09801656311269',
    },
  },
  {
    ocr: {
      name: '박정호',
      jumin: '680205-1010723',
      issued_date: '2006.06.09',
      region: '서울특별시 동대문구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062751_137/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062751_137/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062751_137/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '45286267662b94de7da6521656311271',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '유은혜',
      jumin: '820214-2156322',
      issued_date: '2014.10.04',
      region: '경기도 부천시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062753_630/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062753_630/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062753_630/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
  },
  {
    ocr: {
      name: '엄태륭',
      jumin: '820123-1081210',
      issued_date: '2014.09.22',
      region: '경기지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062756_264/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062756_264/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062756_264/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '13-00-662227-91',
        driver_serial: 'EXN77J',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '186224272962b94decdf6da1656311276',
    },
  },
  {
    ocr: {
      name: '김보경',
      jumin: '800423-2908611',
      issued_date: '2016.08.08',
      region: '경남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062758_181/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062758_181/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062758_181/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '20-02-010774-11',
        driver_serial: 'Z78F7H',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '140838738362b94deecda381656311278',
    },
  },
  {
    ocr: {
      name: '김바다',
      jumin: '970712-1690915',
      issued_date: '2017.10.10',
      region: '대구광역시 중구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062800_134/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062800_134/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062800_134/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '158882613162b94df12df561656311281',
    },
  },
  {
    ocr: {
      name: '윤선영',
      jumin: '860323-2360924',
      issued_date: '2019.08.22',
      region: '충북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062802_835/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062802_835/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062802_835/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '15-05-000067-11',
        driver_serial: 'F4971X',
      },
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '김재문',
      jumin: '800505-1468425',
      issued_date: '2010.12.13',
      region: '충청남도 아산시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062806_241/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062806_241/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062806_241/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '127896434562b94df7148251656311287',
    },
  },
  {
    ocr: {
      name: '도경화',
      jumin: '740402-1812331',
      issued_date: '2017.09.20',
      region: '경북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062808_839/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062808_839/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062808_839/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 21,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종대형, 1종보통',
        driver_number: '19-94-007482-51',
        driver_serial: '987QO2',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '8991438862b94df987a021656311289',
    },
  },
  {
    ocr: {
      name: '심현섭',
      jumin: '820124-2348022',
      issued_date: '2018.08.26',
      region: '충남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062810_826/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062810_826/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062810_826/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '',
        driver_serial: 'UUIGI1',
      },
    },
  },
  {
    ocr: {
      name: '임성태',
      jumin: '730509-2852416',
      issued_date: '2017.11.08',
      region: '울산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062811_926/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062811_926/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062811_926/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '20-93-052143-90',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '15820380162b94dfcba4941656311292',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '노동균',
      jumin: '781030-1122621',
      issued_date: '2015.03.24',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062815_723/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062815_723/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062815_723/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '12-01-000419-60',
        driver_serial: 'H6Q8YG',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '182422051762b94e005ed621656311296',
    },
  },
  {
    ocr: {
      name: '남현민',
      jumin: '790904-1124611',
      issued_date: '2014.01.02',
      region: '부산광역시 북구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062817_756/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062817_756/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062817_756/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '6746233162b94e02991f81656311298',
    },
  },
  {
    ocr: {
      name: '이한울',
      jumin: '790917-2011734',
      issued_date: '2016.04.09',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062820_273/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062820_273/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062820_273/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '18-01-096893-71',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '51942611262b94e04e28a61656311300',
    },
  },
  {
    ocr: {
      name: '이욱진',
      jumin: '830813-1058111',
      issued_date: '2016.01.29',
      region: '경기지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062822_153/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062822_153/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062822_153/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '13-06-642071-91',
        driver_serial: '996181',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '29037180062b94e06c489e1656311302',
    },
  },
  {
    ocr: {
      name: '유효준',
      jumin: '870128-1063116',
      issued_date: '2017.10.31',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062823_981/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062823_981/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062823_981/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '11-05-629256-60',
        driver_serial: 'S817FK',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '3735063762b94e08aa2421656311304',
    },
  },
  {
    ocr: {
      name: '안덕진',
      jumin: '860126-1006226',
      issued_date: '2021.11.09',
      region: '서울특별시경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062825_966/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062825_966/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062825_966/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '11-04-219990-91',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '41645351862b94e0abf5cd1656311306',
    },
  },
  {
    ocr: {
      name: '장석후',
      jumin: '831102-1474414',
      issued_date: '',
      region: '충남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062828_036/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062828_036/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062828_036/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 0,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '16-02-603819-82',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '15025562862b94e0caafbc1656311308',
    },
  },
  {
    ocr: {
      name: '김미숙',
      jumin: '801006-2812925',
      issued_date: '2015.12.16',
      region: '강원지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062830_121/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062830_121/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062830_121/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 21,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '14-05-404968-80',
        driver_serial: 'V78WUG',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '156448412462b94e0ebdcd11656311310',
    },
  },
  {
    ocr: {
      name: '임영아',
      jumin: '780620-2018314',
      issued_date: '2002.04.16',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062831_938/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062831_938/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062831_938/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '200116862b94e11d22e11656311313',
    },
  },
  {
    ocr: {
      name: '양정모',
      jumin: '810512-1379713',
      issued_date: '2015.11.12',
      region: '대전지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062835_639/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062835_639/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062835_639/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '15-00-022260-00',
        driver_serial: '9UTHWP',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '72790793462b94e147b4a91656311316',
    },
  },
  {
    ocr: {
      name: '홍영석',
      jumin: '781117-1109131',
      issued_date: '2003.10.18',
      region: '부산광역시 수영구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062837_617/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062837_617/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062837_617/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '131602584562b94e1668e701656311318',
    },
  },
  {
    ocr: {
      name: '창일',
      jumin: '800215-1150923',
      issued_date: '2018.11.22',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062840_204/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062840_204/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062840_204/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '최승용',
      jumin: '750729-1226219',
      issued_date: '2019.01.23',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062845_413/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062845_413/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062845_413/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-94-030270-74',
        driver_serial: 'PEV187',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '57700416262b94e1e16b801656311326',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '장윤희',
      jumin: '800701-2347819',
      issued_date: '2018.12.14',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062849_892/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062849_892/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062849_892/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '11-11-854989-10',
        driver_serial: '9HV0VG',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '112386186462b94e22982431656311330',
    },
  },
  {
    ocr: {
      name: '김소연',
      jumin: '760105-2056213',
      issued_date: '2018.01.23',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062851_851/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062851_851/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062851_851/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 21,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-99-226522-41',
        driver_serial: '9DQO7R',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '159284522462b94e24756d91656311332',
    },
  },
  {
    ocr: {
      name: '장일훈',
      jumin: '820116-1348038',
      issued_date: '2020.12.03',
      region: '강원지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062853_678/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062853_678/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062853_678/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '14-10-402723-11',
        driver_serial: '8N89PE',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '137677773262b94e2667e4b1656311334',
    },
  },
  {
    ocr: {
      name: '임소연',
      jumin: '790514-2655617',
      issued_date: '2018.10.10',
      region: '제주지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062855_837/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062855_837/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062855_837/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '13-00-663580-53',
        driver_serial: '2F150U',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '91344424162b94e2882d461656311336',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '김하정',
      jumin: '771025-2696214',
      issued_date: '2015.01.27',
      region: '경북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062859_196/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062859_196/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062859_196/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '22-05-042421-12',
        driver_serial: 'DZTUDF',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '166132116562b94e2becdd21656311339',
    },
  },
  {
    ocr: {
      name: '전재용',
      jumin: '761109-1005715',
      issued_date: '2019.06.24',
      region: '충남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062901_271/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062901_271/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062901_271/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-09-849236-50',
        driver_serial: '7GVPPQ',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '160705168462b94e2df32d81656311341',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '김미선',
      jumin: '761017-2149617',
      issued_date: '2018.10.02',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062904_826/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062904_826/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062904_826/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '23-00-020271-50',
        driver_serial: '8FFNFI',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '89036884862b94e318898c1656311345',
    },
  },
  {
    ocr: {
      name: '장진경',
      jumin: '790302-2268115',
      issued_date: '2016.09.29',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062906_724/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062906_724/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062906_724/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-16-066245-50',
        driver_serial: 'VUD6V9',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '133516265962b94e335a8511656311347',
    },
  },
  {
    ocr: {
      name: '위재화',
      jumin: '690215-2333610',
      issued_date: '2020.12.04',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062908_813/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062908_813/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062908_813/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '23-95-047363-01',
        driver_serial: '0OTPJP',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '113649208362b94e358bc5a1656311349',
    },
  },
  {
    ocr: {
      name: '',
      jumin: '790119-1789712',
      issued_date: '2015.07.28',
      region: '경북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062910_866/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062910_866/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062910_866/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 1,
      driver_license: {
        driver_type: '',
        driver_number: '22-06-024717-81',
        driver_serial: '2PNQUE',
      },
    },
  },
  {
    ocr: {
      name: '박민수',
      jumin: '741109-1058420',
      issued_date: '2018.08.08',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062912_060/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062912_060/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062912_060/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '11-93-705307-00',
        driver_serial: 'G2NUUI',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '13507478162b94e38ca6791656311352',
    },
  },
  {
    ocr: {
      name: '정창환',
      jumin: '730217-1260716',
      issued_date: '2016.11.03',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062913_990/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062913_990/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062913_990/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종대형, 2종보통, 2종소형',
        driver_number: '15-95-030188-11',
        driver_serial: '6HWE9G',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '91278918662b94e3add51e1656311354',
    },
  },
  {
    ocr: {
      name: '최원자',
      jumin: '690703-2095912',
      issued_date: '2014.12.16',
      region: '경남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062916_346/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062916_346/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062916_346/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '20-95-016037-91',
        driver_serial: 'VPONEU',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '56752361362b94e3d08c141656311357',
    },
  },
  {
    ocr: {
      name: '전형진',
      jumin: '850228-1273717',
      issued_date: '2018.07.06',
      region: '강원지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062918_269/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062918_269/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062918_269/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '14-04-603593-81',
        driver_serial: 'E8TP04',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '126323231062b94e3ee2daf1656311358',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '서수인',
      jumin: '840716-2017121',
      issued_date: '2012.05.30',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062921_874/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062921_874/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062921_874/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '',
        driver_number: '서울 12-226650-00',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '53483555462b94e42d147d1656311362',
    },
  },
  {
    ocr: {
      name: '임윤정',
      jumin: '770505-2542631',
      issued_date: '2014.05.14',
      region: '대전지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062924_152/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062924_152/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062924_152/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '전북 06-030250-40',
        driver_serial: '7U1T94',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '212093176862b94e44c7c351656311364',
    },
  },
  {
    ocr: {
      name: '차진영',
      jumin: '691106-1231631',
      issued_date: '',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062926_144/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062926_144/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062926_144/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-89-632076-82',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '6332116062b94e46be95c1656311366',
    },
  },
  {
    ocr: {
      name: '김보라',
      jumin: '820401-2352413',
      issued_date: '2014.09.26',
      region: '부산광역시 기장군수',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062928_082/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062928_082/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062928_082/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '175356882762b94e48d4a641656311368',
    },
  },
  {
    ocr: {
      name: '김영환',
      jumin: '680709-1908311',
      issued_date: '2006.07.12',
      region: '경상남도 김해시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062930_511/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062930_511/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062930_511/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '34083840462b94e4b73c081656311371',
    },
  },
  {
    ocr: {
      name: '김창일',
      jumin: '700610-1784011',
      issued_date: '2021.10.14',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062933_284/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062933_284/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062933_284/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 27,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '196657901762b94e4f9ae9d1656311375',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '김정선',
      jumin: '770222-2005419',
      issued_date: '2008.06.16',
      region: '서울특별시 강동구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062937_360/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062937_360/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062937_360/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '133963139862b94e52258cd1656311378',
    },
  },
  {
    ocr: {
      name: '장점례',
      jumin: '620701-2459918',
      issued_date: '2014.08.27',
      region: '충남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062939_974/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062939_974/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062939_974/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '16-00-618477-80',
        driver_serial: '7EIVO8',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '167038438762b94e549ea8f1656311380',
    },
  },
  {
    ocr: {
      name: '박은정',
      jumin: '760522-2031525',
      issued_date: '2015.04.03',
      region: '부산광역시 남구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062941_969/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062941_969/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062941_969/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 18,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '23002115262b94e56a85e11656311382',
    },
  },
  {
    ocr: {
      name: '이재경',
      jumin: '840403-1151614',
      issued_date: '2021.10.20',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062944_474/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062944_474/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062944_474/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 17,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '23-07-030916-02',
        driver_serial: 'UGFV9J',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '107954517262b94e591f4a91656311385',
    },
  },
  {
    ocr: {
      name: '정선숙',
      jumin: '820409-2114613',
      issued_date: '2011.04.28',
      region: '부산광역시 부산진구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062946_540/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062946_540/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062946_540/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '120538435062b94e5b7581e1656311387',
    },
  },
  {
    ocr: {
      name: '안다연',
      jumin: '960307-2184920',
      issued_date: '2018.06.21',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062949_300/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062949_300/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062949_300/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 1,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-18-630100-90',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '205486743262b94e5e040421656311390',
    },
  },
  {
    ocr: {
      name: '진영민',
      jumin: '820501-1477928',
      issued_date: '2015.01.07',
      region: '충남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062951_184/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062951_184/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062951_184/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통, 2종소형',
        driver_number: '16-99-606626-30',
        driver_serial: 'OGW6HJ',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '199707316162b94e5feff981656311391',
    },
  },
  {
    ocr: {
      name: '',
      jumin: '811107-1018015',
      issued_date: '2017.11.21',
      region: '울산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062953_116/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062953_116/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062953_116/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '13-07-013863-12',
        driver_serial: '',
      },
    },
  },
  {
    ocr: {
      name: '정지은',
      jumin: '781215-2702111',
      issued_date: '2022.04.05',
      region: '경기도 화성시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062954_165/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062954_165/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062954_165/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '158605740362b94e62e0a361656311394',
    },
  },
  {
    ocr: {
      name: '김기섭',
      jumin: '741112-1903711',
      issued_date: '',
      region: '경기도 고양시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062956_729/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062956_729/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062956_729/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: false,
      message: 'Issue date is invalid',
      error_code: 'A002',
      transaction_id: '147001934462b94e658c10a1656311397',
    },
  },
  {
    ocr: {
      name: '이혜진',
      jumin: '840210-2075816',
      issued_date: '2018.06.16',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627062957_854/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627062957_854/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627062957_854/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '13-08-662700-90',
        driver_serial: '7OO7ZD',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '22009402062b94e66bc40c1656311398',
    },
  },
  {
    ocr: {
      name: '조효진',
      jumin: '771111-2558915',
      issued_date: '2021.11.15',
      region: '경기도남부경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063000_203/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063000_203/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063000_203/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '',
        driver_number: '13-21-673378-90',
        driver_serial: '6HXVP1',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '183444578762b94e68f0bb71656311400',
    },
  },
  {
    ocr: {
      name: '최봉실',
      jumin: '660115-2094320',
      issued_date: '2012.01.09',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063002_759/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063002_759/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063002_759/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '부산 02-623447-61',
        driver_serial: '1847QO',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '149945025162b94e6b6dd7e1656311403',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '신인철',
      jumin: '791212-1483223',
      issued_date: '2012.06.07',
      region: '전북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063006_206/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063006_206/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063006_206/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '전북 98-047308-40',
        driver_serial: '8241VP',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '101687260962b94e6eec6ed1656311406',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '남자현',
      jumin: '870422-2031819',
      issued_date: '2013.05.27',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063009_156/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063009_156/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063009_156/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '서울 13-817327-40',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '28931620462b94e723eef91656311410',
    },
  },
  {
    ocr: {
      name: '박종선',
      jumin: '670929-1621612',
      issued_date: '2021.08.26',
      region: '경기도남부경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063011_669/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063011_669/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063011_669/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종대형, 1종보통',
        driver_number: '18-87-034763-22',
        driver_serial: 'TU2KJL',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '82227059962b94e74626701656311412',
    },
  },
  {
    ocr: {
      name: '김에녹',
      jumin: '930714-1081410',
      issued_date: '2017.04.24',
      region: '서울특별시 금천구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063013_458/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063013_458/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063013_458/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '123191337162b94e76427cc1656311414',
    },
  },
  {
    ocr: {
      name: '리준형',
      jumin: '860211-1026113',
      issued_date: '2013.10.07',
      region: '대전지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063015_956/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063015_956/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063015_956/DRIVER_LICENSE/unmarked_image.jpg',
      validation: false,
      found_face: 1,
      face_recog_time: 21,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '',
        driver_serial: 'JGHO1I',
      },
    },
  },
  {
    ocr: {
      name: '배지호',
      jumin: '870112-1105310',
      issued_date: '2017.01.19',
      region: '부산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063017_214/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063017_214/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063017_214/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '12-09-018416-80',
        driver_serial: '896565',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '56025233962b94e79d2e5a1656311417',
    },
  },
  {
    ocr: {
      name: '조숙희',
      jumin: '720919-2080015',
      issued_date: '2000.03.13',
      region: '경기도 의정부시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063019_118/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063019_118/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063019_118/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '90388724062b94e7bc001f1656311419',
    },
  },
  {
    ocr: {
      name: '조정래',
      jumin: '850329-1223624',
      issued_date: '2019.03.06',
      region: '경기도 남양주시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063021_397/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063021_397/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063021_397/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '212820630062b94e7e3dbe71656311422',
    },
  },
  {
    ocr: {
      name: '이유진',
      jumin: '941210-2054620',
      issued_date: '2014.09.05',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063023_942/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063023_942/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063023_942/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '11-14-653560-10',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '9112162762b94e80b354a1656311424',
    },
  },
  {
    ocr: {
      name: '박수란',
      jumin: '840920-2012748',
      issued_date: '2007.10.01',
      region: '서울특별시 중랑구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063026_014/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063026_014/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063026_014/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '30031437462b94e82d9e5e1656311426',
    },
  },
  {
    ocr: {
      name: '김상룡',
      jumin: '790828-1408617',
      issued_date: '2015.01.19',
      region: '대전지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063028_687/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063028_687/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063028_687/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '16-99-045855-90',
        driver_serial: '174OSE',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '89500366162b94e85557bf1656311429',
    },
  },
  {
    ocr: {
      name: '윤정식',
      jumin: '741225-1661022',
      issued_date: '2012.05.19',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063030_810/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063030_810/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063030_810/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '전남 93-109207-00',
        driver_serial: 'O967VP',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '49962357062b94e878500a1656311431',
    },
  },
  {
    ocr: {
      name: '정현민',
      jumin: '840221-1380211',
      issued_date: '2020.11.12',
      region: '대전지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063032_842/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063032_842/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063032_842/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '16-03-035076-72',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '86071562262b94e8978a331656311433',
    },
  },
  {
    ocr: {
      name: '이현세',
      jumin: '950330-1588311',
      issued_date: '2012.04.27',
      region: '전라남도 무안군수',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063034_740/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063034_740/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063034_740/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '31389852462b94e8b632d51656311435',
    },
  },
  {
    ocr: {
      name: '최혜연',
      jumin: '700608-2120617',
      issued_date: '2017.11.21',
      region: '충남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063037_213/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063037_213/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063037_213/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '23-89-018928-70',
        driver_serial: '5E7OF3',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '48761887162b94e8df20f91656311437',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '박미란',
      jumin: '680503-2542611',
      issued_date: '2017.08.30',
      region: '경기도 시흥시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063039_998/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063039_998/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063039_998/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '77485107862b94e90cc4881656311440',
    },
  },
  {
    ocr: {
      name: '한석호',
      jumin: '900904-1123112',
      issued_date: '2019.02.11',
      region: '울산광역시 중구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063042_566/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063042_566/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063042_566/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '178738075262b94e93608301656311443',
    },
  },
  {
    ocr: {
      name: '이윤호',
      jumin: '880416-1076417',
      issued_date: '2021.10.26',
      region: '서울특별시 관악구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063045_086/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063045_086/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063045_086/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '131165234562b94e95c90eb1656311445',
    },
  },
  {
    ocr: {
      name: '윤양경',
      jumin: '790711-1012213',
      issued_date: '2013.01.09',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063047_550/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063047_550/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063047_550/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '경기 99-801159-01',
        driver_serial: '8239BP',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '145992598962b94e98454891656311448',
    },
  },
  {
    ocr: {
      name: '엄성호',
      jumin: '820802-1822821',
      issued_date: '2021.12.27',
      region: '경상남도 창원시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063049_514/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063049_514/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063049_514/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
  },
  {
    ocr: {
      name: '이윤서',
      jumin: '730118-2531213',
      issued_date: '2016.08.12',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063051_962/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063051_962/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063051_962/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '18-94-096802-12',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '15074893362b94e9cbc2921656311452',
    },
  },
  {
    ocr: {
      name: '김장훈',
      jumin: '810210-1111313',
      issued_date: '2020.11.30',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063054_016/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063054_016/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063054_016/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 21,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '20-01-028970-34',
        driver_serial: 'JOD77I',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '130114208162b94e9eb1a0b1656311454',
    },
  },
  {
    ocr: {
      name: '박성민',
      jumin: '810706-1279413',
      issued_date: '2015.01.13',
      region: '강원지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063056_065/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063056_065/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063056_065/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '14-00-611089-30',
        driver_serial: 'UUUEG9',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '158406009662b94ea0aff351656311456',
    },
  },
  {
    ocr: {
      name: '이민우',
      jumin: '781201-1811218',
      issued_date: '2021.04.28',
      region: '경기도 평택시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063057_965/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063057_965/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063057_965/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '139860717062b94ea29205c1656311458',
    },
  },
  {
    ocr: {
      name: '서동섭',
      jumin: '800624-1849627',
      issued_date: '2015.09.03',
      region: '울산지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063100_275/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063100_275/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063100_275/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '26-08-000654-51',
        driver_serial: 'R7EGQB',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '45995336462b94ea4ec6861656311460',
    },
  },
  {
    ocr: {
      name: '서정우',
      jumin: '840621-1018821',
      issued_date: '2001.12.13',
      region: '',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063102_310/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063102_310/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063102_310/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '58872022462b94ea7490e81656311463',
    },
  },
  {
    ocr: {
      name: '김현',
      jumin: '690103-1676214',
      issued_date: '2017.04.04',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063104_939/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063104_939/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063104_939/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '22-92-041297-84',
        driver_serial: 'J8WOGK',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '50714315662b94ea9a69b21656311465',
    },
  },
  {
    ocr: {
      name: '이유석',
      jumin: '901115-1019416',
      issued_date: '2017.09.25',
      region: '경기북부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063106_866/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063106_866/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063106_866/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종대형',
        driver_number: '11-07-216790-94',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '36976571362b94eabc3eb61656311467',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '배대원',
      jumin: '800619-1070812',
      issued_date: '2015.01.23',
      region: '서울지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063109_105/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063109_105/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063109_105/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '11-01-215490-70',
        driver_serial: 'OH9P2U',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '141606332762b94eadc839d1656311469',
    },
  },
  {
    ocr: {
      name: '이연경',
      jumin: '850221-2065119',
      issued_date: '2006.11.27',
      region: '서울특별시 강서구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063111_001/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063111_001/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063111_001/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 26,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '134936459762b94eb0386821656311472',
    },
  },
  {
    ocr: {
      name: '박수철',
      jumin: '751119-1455016',
      issued_date: '2020.05.11',
      region: '충청남도 논산시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063113_897/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063113_897/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063113_897/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '102798590362b94eb2d03021656311474',
    },
  },
  {
    ocr: {
      name: '우재현',
      jumin: '920422-1124119',
      issued_date: '2017.07.25',
      region: '경남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063116_574/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063116_574/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063116_574/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 25,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '22-12-035168-13',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '94930510062b94eb5534cd1656311477',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '박혜림',
      jumin: '821219-2321015',
      issued_date: '2013.05.28',
      region: '서울특별시 마포구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063120_009/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063120_009/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063120_009/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 22,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '84271099962b94eb8dcfee1656311480',
    },
  },
  {
    ocr: {
      name: '김건호',
      jumin: '790525-1120612',
      issued_date: '2009.12.30',
      region: '부산광역시 남구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063122_580/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063122_580/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063122_580/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 20,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '183584068262b94ebbb24fe1656311483',
    },
  },
  {
    ocr: {
      name: '박수정',
      jumin: '840803-2279210',
      issued_date: '2020.01.09',
      region: '강원지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063125_477/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063125_477/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063125_477/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '14-20-600264-40',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '158707605362b94ebe242581656311486',
    },
  },
  {
    ocr: {
      name: '윤예지',
      jumin: '870220-2157513',
      issued_date: '2016.02.05',
      region: '인천지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063127_599/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063127_599/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063127_599/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '16-08-616738-10',
        driver_serial: 'V9EGQE',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '20270977562b94ec04f99c1656311488',
    },
  },
  {
    ocr: {
      name: '이제영',
      jumin: '910323-1183710',
      issued_date: '2008.09.30',
      region: '경기도 부천시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063129_471/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063129_471/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063129_471/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '171408003762b94ec22beb71656311490',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '이미향',
      jumin: '810724-2066019',
      issued_date: '2003.11.05',
      region: '경기도 고양시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063131_958/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063131_958/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063131_958/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 1,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '49948992262b94ec50f19f1656311493',
    },
  },
  {
    ocr: {
      name: '우은희',
      jumin: '770919-2777818',
      issued_date: '2014.09.22',
      region: '대구지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063134_764/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063134_764/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063134_764/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 21,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '22-97-012259-81',
        driver_serial: '',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '167743934662b94ec791fde1656311495',
    },
  },
  {
    ocr: {
      name: '김비경',
      jumin: '880627-2069914',
      issued_date: '2006.01.02',
      region: '서울특별시 성동구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063136_819/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063136_819/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063136_819/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '198570468662b94ec98020d1656311497',
    },
  },
  {
    ocr: {
      name: '이동훈',
      jumin: '950807-1528812',
      issued_date: '2020.02.26',
      region: '대전광역시 유성구청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063139_736/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063139_736/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063139_736/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '122866596862b94eccad9f41656311500',
    },
  },
  {
    ocr: {
      name: '안계영',
      jumin: '800923-1820911',
      issued_date: '2020.11.10',
      region: '경상남도 창원시장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063142_604/RESIDENT_REGISTRATION/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063142_604/RESIDENT_REGISTRATION/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063142_604/RESIDENT_REGISTRATION/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      resident_registration: { expatriate: 'FALSE' },
    },
    status: {
      success: true,
      message: '입력하신 내용은 등록된 내용과 일치합니다.',
      transaction_id: '77413110462b94ecf417a51656311503',
    },
  },
  {
    ocr: {
      name: '김광태',
      jumin: '580803-1357324',
      issued_date: '2016.04.06',
      region: '경기북부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063145_007/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063145_007/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063145_007/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 24,
      specular_ratio: 0,
      driver_license: {
        driver_type: '1종보통, 2종보통',
        driver_number: '11-77-095214-51',
        driver_serial: 'EVP6EG',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '115258638362b94ed1ea53c1656311505',
    },
  },
  {
    ocr: {
      name: '윤지성',
      jumin: '850519-2351326',
      issued_date: '2017.10.23',
      region: '충북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063147_303/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063147_303/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063147_303/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '15-08-007293-10',
        driver_serial: 'FW09SC',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '136775885162b94ed3e55581656311507',
    },
  },
  {
    ocr: {
      name: '김새봄',
      jumin: '860217-2784211',
      issued_date: '2017.08.21',
      region: '경북지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063149_149/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063149_149/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063149_149/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '19-10-603684-50',
        driver_serial: '11TD08',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '101022541562b94ed5c9ac91656311509',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '한승전',
      jumin: '791001-1247617',
      issued_date: '2016.10.26',
      region: '경기남부지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063152_636/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063152_636/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063152_636/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 23,
      specular_ratio: 1,
      driver_license: {
        driver_type: '1종보통',
        driver_number: '11-02-029790-51',
        driver_serial: '7ES4OY',
      },
    },
  },
  {
    ocr: {
      name: '김은하',
      jumin: '800826-2647913',
      issued_date: '2014.07.14',
      region: '전남지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063154_546/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063154_546/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063154_546/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 0,
      face_recog_time: 22,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '18-05-020697-00',
        driver_serial: '7UWUUH',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '62664715062b94edb426111656311515',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  {
    ocr: {
      name: '유혜경',
      jumin: '660612-2067115',
      issued_date: '2016.08.29',
      region: '대전지방경찰청장',
      portrait_path:
        '/home/luther/qram2/result/web_20220627063158_955/DRIVER_LICENSE/portrait.jpg',
      marked_image_path:
        '/home/luther/qram2/result/web_20220627063158_955/DRIVER_LICENSE/marked_image.jpg',
      unmarked_image_path:
        '/home/luther/qram2/result/web_20220627063158_955/DRIVER_LICENSE/unmarked_image.jpg',
      validation: true,
      found_face: 1,
      face_recog_time: 18,
      specular_ratio: 0,
      driver_license: {
        driver_type: '2종보통',
        driver_number: '16-90-079879-10',
        driver_serial: 'D6HVE9',
      },
    },
    status: {
      success: true,
      message: '전산 자료와 일치 합니다.',
      transaction_id: '111077493162b94edf930961656311519',
    },
  },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
  { success: false, error: '운전면허증 또는 주민등록증이 아님' },
];

console.log(testResult.length)
console.log(testResult.filter(item => item.ocr).length)
testResult.filter(item => !item.ocr).forEach(item=>{
    console.log(item)
})
// console.log(testResult.filter(item => !item.ocr).slice[])
console.log(testResult.filter(item => item.ocr && item.status).length)
console.log(testResult.filter(item => item.ocr && item.status && item.status.success).length)