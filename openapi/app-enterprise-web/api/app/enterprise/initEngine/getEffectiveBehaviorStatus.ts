// JSONResult«DataInteractionOutputDTO»
export interface IJSONResultDataInteractionOutputDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IDataInteractionOutputDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// DataInteractionOutputDTO
export interface IDataInteractionOutputDTO {
    // 模板编码
    templateCode: string;
    // 生效状态
    interactionStatus: string;
}
