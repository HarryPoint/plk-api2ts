import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/项目阶段相关/bindUsingPOST
export default function fetchMethod(data: ITheProjectPhaseBindsTheRequestObject, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/projectStage/bind",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// 项目阶段绑定请求对象
export interface ITheProjectPhaseBindsTheRequestObject {
    // 项目阶段id
    projectStageId: number;
    // 项目计划id
    projectPlanId: number;
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
