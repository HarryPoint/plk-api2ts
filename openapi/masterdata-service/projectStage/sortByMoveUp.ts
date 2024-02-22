import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/项目阶段相关/sortByMoveUpUsingPOST
export function fetchMethod(data: IProjectPhaseSortRequestObjects) {
    return post({
      url: "/masterdata-service/projectStage/sortByMoveUp",
      data,
    });
}
// 项目阶段排序请求对象
export interface IProjectPhaseSortRequestObjects {
    // 项目计划id
    projectPlanId: number;
    // 移动项目阶段id
    moveProjectStageId: number;
    // 移动到的排序,最小为1
    moveToSort: number;
    // 是否是在项目计划模块展示的阶段
    isProjectPlanShow: string;
    // 是否是在项目任务模块展示的阶段
    isProjectTaskShow: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
