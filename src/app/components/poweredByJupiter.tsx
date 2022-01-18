import { Avatar, Space, Tooltip, Typography } from 'antd'
import JupiterIcon from 'app/static/images/jupiter-logo.svg'

const PoweredByJupiter = ({
  spacing = 4,
  iconSize = 20,
}: {
  spacing?: number
  iconSize?: number
}) => {
  return (
    <Tooltip title="Jupiter Aggregator">
      <Space size={spacing} style={{ cursor: 'pointer' }}>
        <Typography.Text style={{ fontSize: 12, color: '#7A7B85' }}>
          Powered by
        </Typography.Text>
        <Avatar src={JupiterIcon} size={iconSize} />
      </Space>
    </Tooltip>
  )
}

export default PoweredByJupiter
