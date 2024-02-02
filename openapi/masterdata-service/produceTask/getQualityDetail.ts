// 进出站详细搜索VO
export interface IEnterAndExitTheStationForDetailedVOSearch {
    // 任务id
    taskId: number;
    // 批次id
    lotOrderId: number;
    // wip状态记录id
    wipRpId: number;
}
// JSONResult«进出站信息VO»
export interface IJSONResultInboundAndOutboundInformationVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 进出站信息VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
