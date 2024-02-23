import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/标签设置/editUsingPOST_12
export default function fetchMethod(data: IProductionLabelEditingDTO, params: { enterpriseId: number }) {
    return http<IJSONResultobject>({
        url: "/masterdata-service/produceTag/edit",
        method: "post",
        data,
        params,
    });
}
// 生产标签编辑DTO
export interface IProductionLabelEditingDTO {
    // id
    id: number;
    // 所属分类
    type: string;
    // 标签名称
    name: string;
    // 标签编号
    code: string;
    // 是否应用编码规则
    isCodeRule: string;
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
