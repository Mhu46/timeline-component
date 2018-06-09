export const mockData = {
  'incident': {
    'id': '1123',
    'name': 'High HTTP Response Latency',
    'severity': 'High',
    'start': '2018-05-12T10:32:12.000Z',
    'end': '2018-05-12T12:22:01.000Z',
    'causes': [
      {
        'id': 'cause-23322',
        'text': 'Network Issues in \'region:aws-us-east-1\'',
        'start': '2018-05-12T10:32:12.000Z',
        'end': '2018-05-12T11:15:22.000Z',
        'severity': 'Low',
        'affected': [
          '\'host:db-aue1-3j2h2',
          'region:aws-us-east-1',
          'svc:db\'',
          '\'host:db-aue1-3jh32',
          'region:aws-us-east-1',
          'svc:db\'',
          '\'host:ac-aue1-4jh2',
          'region:aws-us-east-1',
          'svc:ac\'',
          '\'host:ac-aue1-66h2',
          'region:aws-us-east-1',
          'svc:ac\''
        ]
      },
      {
        'id': 'cause-23422',
        'text': 'Issues in \'svc:ac,region:aws-us-east-1\'',
        'start': '2018-05-12T10:45:18.000Z',
        'end': '2018-05-12T12:13:12.000Z',
        'severity': 'Medium',
        'affected': [
          '\'host:ac-aue1-4jh2',
          'region:aws-us-east-1',
          'svc:ac\'',
          '\'host:ac-aue1-66h2',
          'region:aws-us-east-1',
          'svc:ac\''

        ]
      },
      {
        'id': 'cause-32223',
        'text': 'High CPU usage in \'host:ac-aue1-4jh2,region:aws-us-east-1,svc:ac\'',
        'start': '2018-05-12T12:11:33.000Z',
        'end': '2018-05-12T12:22:01.000Z',
        'severity': 'High',
        'affected': [
          '\'host:ac-aue1-4jh2',
          'region:aws-us-east-1',
          'svc:ac\''
        ]
      }
    ]
  }
};
