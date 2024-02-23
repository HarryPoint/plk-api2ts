import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/员工扫码报工工序相关/getUserScanProcessUsingGET
export default function fetchMethod(params: { enterpriseId: number; userId: number }) {
    return http<IJSONResultUserScanProcessVO>({
        url: "/masterdata-service/userScanProcess/getUserScanProcess",
        method: "get",
        params,
    });
}
// JSONResult«UserScanProcessVO»
export interface IJSONResultUserScanProcessVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IUserScanProcessVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// UserScanProcessVO
export interface IUserScanProcessVO {
    // undefined
    id: number;
    // undefined
    enterpriseId: number;
    // undefined
    userId: number;
    // undefined
    processId: number;
}
