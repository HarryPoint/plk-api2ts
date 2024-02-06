// 项目概况查询dto
export interface IProjectOverviewQueryDto {
    // 项目id
    projectId: number;
    // 开始日期
    beginTime: string;
    // 结束日期
    endTime: string;
    // 查询条数
    limit: number;
}
// JSONResult«List«项目大事记响应对象»»
export interface IJSONResultListProjectEventResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProjectEventResponseObject[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目大事记响应对象
export interface IProjectEventResponseObject {
    // 创建时间
    createTime: string;
    // 大事记内容
    content: string;
    // 项目大事记id
    projectMemorabiliaId: number;
    // 项目id
    projectId: number;
    // 来源应用编号
    fromAppCode: string;
    // 来源应用id
    fromAppId: number;
}
