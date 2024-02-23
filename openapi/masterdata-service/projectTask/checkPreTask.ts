import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/项目任务相关/checkPreTaskUsingGET
export default function fetchMethod(params: { id: string }, extraOptions?: any) {
    return http<IJSONResultListProjectTaskPreTaskVerifyTheResponseObject>(
        {
            url: "/masterdata-service/projectTask/checkPreTask",
            method: "get",
            params,
        },
        extraOptions,
    );
}
// JSONResult«List«项目任务前置任务校验响应对象»»
export interface IJSONResultListProjectTaskPreTaskVerifyTheResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IItemTaskPreTaskVerifiesTheResponseObject[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目任务前置任务校验响应对象
export interface IItemTaskPreTaskVerifiesTheResponseObject {
    // 任务id
    id: number;
    // 任务名称
    name: string;
    // 任务编号
    code: string;
}
