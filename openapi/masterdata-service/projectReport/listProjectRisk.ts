import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/项目报表相关/listProjectRiskUsingPOST
export default function fetchMethod(data: IItemNameNumberPublicQueryObject) {
    return post<IJSONResultListProjectRiskReportResponseObject>({
      url: "/masterdata-service/projectReport/listProjectRisk",
      data,
    });
}
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
// JSONResult«List«项目风险报表响应对象»»
export interface IJSONResultListProjectRiskReportResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProjectRiskReportResponseObject[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目风险报表响应对象
export interface IProjectRiskReportResponseObject {
    // id
    id: number;
    // 名称
    name: string;
    // 编号
    code: string;
    // 项目id
    projectId: number;
    // 处理人名称列表
    handleUserNameList: string[];
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
    // 风险类型名称
    projectRiskTypeName: string;
    // 风险标识名称
    projectRiskFlagName: string;
    // 风险等级
    level: string;
    // 责任单位
    responsibleDeptName: string;
    // 要求完成时间
    requireCompleteTime: string;
    // 实际完成时间
    actualCompleteTime: string;
    // undefined
    projectRiskTypeId: number;
    // undefined
    projectRiskFlagId: number;
    // undefined
    responsibleDeptId: number;
    // undefined
    handleUserIds: Record<string, any>[];
}
