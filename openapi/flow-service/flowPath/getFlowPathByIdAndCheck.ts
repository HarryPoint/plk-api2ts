// JSONResult«流程响应VO»
export interface IJSONResultProcessRespondsToVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ITheFlowRespondsToVO1;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 流程响应VO_1
export interface ITheFlowRespondsToVO1 {
    // id
    id: number;
    // 所属企业id
    enterpriseId: number;
    // 编号
    code: string;
    // 应用类型
    type: string;
    // 最新版本号
    lastVersionRank: number;
    // 最新版本流程名称
    lastName: string;
    // 最新版本简介
    lastDescription: string;
    // 最新发布终端值合计
    lastPublishTotal: number;
    // 是否系统级流程
    isSystem: string;
    // 系统流程类型
    flowPathSystemType: string;
    // 排序
    sort: number;
    // 流程结果通知
    flowPathResultNotify: string;
    // 重新提交通知
    recommitNotify: string;
    // 作废停用通知
    invalidNotify: string;
    // 删除通知
    deleteNotify: string;
    // 数据状态 0停用，1启用，2暂存，-1已删除
    dataStatus: number;
    // 应用服务包ID
    appServicePackId: number;
    // 应用级别
    applicationLevel: string;
}
