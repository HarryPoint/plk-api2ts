// JSONResult«项目计划变更信息版本记录»
export interface IJSONResultProjectPlanChangeInformationVersionRecord {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProjectPlanChangeInformationVersionRecord;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目计划变更信息版本记录
export interface IProjectPlanChangeInformationVersionRecord {
    // undefined
    appId: number;
    // undefined
    modificationId: number;
    // undefined
    dataSnapshot: any[];
}
