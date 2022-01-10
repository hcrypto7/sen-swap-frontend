import { useState, Fragment, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { forceCheck } from '@senswap/react-lazyload'

import { Row, Col, Space, Typography, Divider, Modal } from 'antd'
import IonIcon from 'shared/antd/ionicon'
import { MintAvatar, MintSymbol } from 'shared/antd/mint'
import MintSelection, { SelectionInfo } from './mintSelection'

import { SenLpState } from 'app/constant/senLpState'

const Selection = ({
  value,
  onChange,
  selectFrom,
}: {
  value: SelectionInfo
  onChange: (value: SelectionInfo) => void
  selectFrom: string
}) => {
  const [visible, setVisible] = useState(false)
  const history = useHistory()
  const { state } = useLocation<SenLpState>()
  useEffect(() => {
    if (visible) setTimeout(forceCheck, 500)
  }, [visible])

  const onSelection = (selectionInfo: SelectionInfo) => {
    setVisible(false)

    // Clear state of senlp come to
    if (state) history.replace({ ...history.location, state: {} })

    return onChange(selectionInfo)
  }

  const mintAddress = value?.mintInfo?.address || ''

  return (
    <Fragment>
      <Space style={{ cursor: 'pointer' }} onClick={() => setVisible(true)}>
        <MintAvatar mintAddress={mintAddress} />
        <Typography.Text type="secondary">
          <MintSymbol mintAddress={mintAddress} />
        </Typography.Text>
        <Divider type="vertical" style={{ marginLeft: 4 }} />
      </Space>
      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        closeIcon={<IonIcon name="close" />}
        footer={null}
        destroyOnClose={true}
        centered={true}
      >
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <MintSelection
              value={value}
              onChange={onSelection}
              selectFrom={selectFrom}
            />
          </Col>
        </Row>
      </Modal>
    </Fragment>
  )
}

export default Selection
