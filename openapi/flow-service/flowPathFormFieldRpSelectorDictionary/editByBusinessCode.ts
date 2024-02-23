import { http } from '@/api/http';

// http://47.108.139.107:16500/doc.html#/default/流程表单字段表关联字典相关/editByBusinessCodeUsingPOST
export default function fetchMethod(data: IFormFieldOption[], params: { businessCode: string; enterpriseId: number; flowPathId: number }) {
    return http<IJSONResultobject>({
        url: "/flow-service/flowPathFormFieldRpSelectorDictionary/editByBusinessCode",
        method: "post",
        data,
        params,
    });
}
// FormFieldOption
export interface IFormFieldOption {
    // undefined
    name: string;
    // undefined
    code: string;
    // undefined
    color: string;
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
