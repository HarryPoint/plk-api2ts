// 设备实时数据搜索VO
export interface I设备实时数据搜索VO {
    // 设备id
    deviceId: number;
    // 查询参数id集
    paramIds: number[];
}
// JSONResult«设备数采实时数据返回VO»
export interface IJSONResult设备数采实时数据返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 设备数采实时数据返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
