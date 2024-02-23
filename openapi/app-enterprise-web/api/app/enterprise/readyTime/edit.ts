import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/准备期相关/editUsingPOST_24
export default function fetchMethod(data: IPreparatoryPeriodEditorDTO, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/readyTime/edit",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// 准备期编辑DTO
export interface IPreparatoryPeriodEditorDTO {
    // id
    id: number;
    // 所属工序id
    processId: number;
    // 名称
    name: string;
    // 编号
    code: string;
    // 规则类型
    ruleType: string;
    // 耗时
    takeTime: number;
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
