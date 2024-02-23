import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/初始化引擎 - 表数据相关/changeHeaderUsingPOST
export default function fetchMethod(data: ITableHeaderChangesTheInput, params: { id: number }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/app-enterprise-web/api/app/enterprise/initEngine/tableData/header/change",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
// 表头变更输入
export interface ITableHeaderChangesTheInput {
    // undefined
    id: number;
    // 源字段编码
    originalFieldCode: string;
    // 目标字段编码
    targetFieldCode: string;
}
// JSONResult«string»
export interface IJSONResultstring {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
