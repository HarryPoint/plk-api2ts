import { http } from '@/api/http';

// http://47.108.139.107:18100/doc.html#/default/员工相关/listEmployIdsByUserIdsUsingPOST
export default function fetchMethod(data: IIdSetInformation) {
    return http<IJSONResultListlong>({
        url: "/plk-uaa-service/employee/listEmployIdsByUserIds",
        method: "post",
        data,
    });
}
// id集 信息
export interface IIdSetInformation {
    // id集
    ids: number[];
}
// JSONResult«List«long»»
export interface IJSONResultListlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
