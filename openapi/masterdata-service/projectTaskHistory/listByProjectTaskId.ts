import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/项目任务历史相关/listByProjectTaskIdUsingGET
export default function fetchMethod(params: { projectTaskId: number }) {
    return get<IJSONResultListProjectTaskHistoryQueryResponse['data']>({
      url: "/masterdata-service/projectTaskHistory/listByProjectTaskId",
      params,
    });
}
// JSONResult«List«项目任务历史查询响应»»
export interface IJSONResultListProjectTaskHistoryQueryResponse {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProjectTaskHistoryQueryResponse[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目任务历史查询响应
export interface IProjectTaskHistoryQueryResponse {
    // 创建用户ID
    createUserId: number;
    // 创建用户名
    createUserName: string;
    // 创建部门ID
    createDeptId: number;
    // 创建部门名称
    createDeptName: string;
    // 项目任务名称
    projectTaskName: string;
    // 更新部门ID
    updateDeptId: number;
    // 应用版本ID
    appVersionId: number;
    // 更新部门名称
    updateDeptName: string;
    // 创建时间
    createTime: string;
    // 更新用户ID
    updateUserId: number;
    // 更新用户名称
    updateUserName: string;
    // 更新时间
    updateTime: string;
    // ID
    id: number;
    // 版本号
    versionNo: string;
    // 项目任务ID
    projectTaskId: number;
    // 应用ID
    appId: number;
    // 禁用来源任务名称
    disableFromTaskName: string;
    // 应用系统类型
    appSystemType: string;
    // 变更应用id
    modificationAppId: number;
    // 变更单id
    modificationId: number;
    // 变更单编号
    modificationCode: string;
}
