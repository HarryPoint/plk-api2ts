import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/项目任务相关/sortByMoveDownUsingPOST_1
export default function fetchMethod(data: IProjectTaskSortRequestObject) {
    return http<IJSONResultobject>({
        url: "/masterdata-service/projectTask/sortByMoveDown",
        method: "post",
        data,
    });
}
// 项目任务排序请求对象
export interface IProjectTaskSortRequestObject {
    // 项目计划id
    projectPlanId: number;
    // 移动任务id
    moveProjectTaskId: number;
    // 移动到的排序,最小为1
    moveToSort: number;
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
