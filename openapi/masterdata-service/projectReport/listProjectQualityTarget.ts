// 项目名称编号公共查询对象
export interface IItemNameNumberPublicQueryObject {
    // 名称or编号
    nameOrCode: string;
    // 条数
    limit: number;
    // 项目计划ids
    projectPlanIds: number[];
    // undefined
    ids: number[];
    // undefined
    projectIds: number[];
    // undefined
    statusList: string[];
}
// JSONResult«List«项目质量目标报表响应对象»»
export interface IJSONResultListProjectQualityTargetReportResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProjectQualityObjectiveReportResponseObject[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目质量目标报表响应对象
export interface IProjectQualityObjectiveReportResponseObject {
    // id
    id: number;
    // 名称
    name: string;
    // 编号
    code: string;
    // 项目id
    projectId: number;
    // 项目名称
    projectName: string;
    // 项目编号
    projectCode: string;
    // 项目类型id
    projectTypeId: number;
    // 项目类型名称
    projectTypeName: string;
    // 项目大类
    projectCategory: string;
    // 项目大类名称
    projectCategoryName: string;
    // 项目经理名称
    projectManagerName: string;
    // 是否超期
    isOverdue: string;
    // 超期天数(天)
    overdueDay: number;
    // 状态
    status: string;
    // 来源应用编号
    fromAppCode: string;
    // 来源应用id
    fromAppId: number;
    // undefined
    projectManagerId: number;
    // 负责人名称列表
    responsibleNameList: string[];
    // 开始日期
    beginTime: string;
    // 截至日期
    endTime: string;
    // 实际完成时间
    actualCompleteTime: string;
    // undefined
    responsibleUserIds: Record<string, any>[];
}
