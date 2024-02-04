// JSONResult«List«批次信息VO»»
export interface IJSONResultList批次信息VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IBatchInformationVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 批次信息VO
export interface IBatchInformationVO {
    // id
    id: number;
    // 批次名称
    lotName: string;
    // 批次号
    lotNo: string;
    // 总数量
    totalCount: number;
}
