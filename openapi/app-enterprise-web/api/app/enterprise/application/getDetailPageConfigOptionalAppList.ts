import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/应用相关/getDetailPageConfigOptionalAppListUsingGET
export default function fetchMethod(params: { id: number }) {
    return http<IJSONResultFlowPathDetailPageConfigOptionalAppResponseDTO>({
        url: "/app-enterprise-web/api/app/enterprise/application/getDetailPageConfigOptionalAppList",
        method: "get",
        params,
    });
}
// JSONResult«FlowPathDetailPageConfigOptionalAppResponseDTO»
export interface IJSONResultFlowPathDetailPageConfigOptionalAppResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IFlowPathDetailPageConfigOptionalAppResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// FlowPathDetailPageConfigOptionalAppResponseDTO
export interface IFlowPathDetailPageConfigOptionalAppResponseDTO {
    // app列表
    appList: IFlowPathBaseVO[];
}
// FlowPathBaseVO
export interface IFlowPathBaseVO {
    // undefined
    id: number;
    // undefined
    code: string;
    // undefined
    lastName: string;
    // undefined
    type: string;
}
