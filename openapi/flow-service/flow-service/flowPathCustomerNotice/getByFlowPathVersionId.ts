// JSONResult«List«流程自定义通知字段响应VO»»
export interface ITheJSONResultListProcessCustomNotificationFieldRespondsToVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ITheProcessCustomNotificationFieldRespondsToVO1[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 流程自定义通知字段响应VO_1
export interface ITheProcessCustomNotificationFieldRespondsToVO1 {
    // id
    id: number;
    // 所属企业id
    enterpriseId: number;
    // 所属流程id
    flowPathId: number;
    // 所属流程版本id
    flowPathVersionId: number;
    // 流程版本号
    flowPathVersionRank: number;
    // 关联字段SerialNo
    flowPathFormFieldSerialNo: string;
}
