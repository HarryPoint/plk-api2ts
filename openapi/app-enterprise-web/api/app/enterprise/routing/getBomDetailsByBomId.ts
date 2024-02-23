import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/工艺路径相关/getBomDetailsByBomIdUsingGET
export default function fetchMethod(params: { bomId: number }) {
    return http<IJSONResultListBomDetailsSelectBasicInformationDTO>({
        url: "/app-enterprise-web/api/app/enterprise/routing/getBomDetailsByBomId",
        method: "get",
        params,
    });
}
// JSONResult«List«物料主数据Bom详情选择基础信息DTO»»
export interface IJSONResultListBomDetailsSelectBasicInformationDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IBomDetailsSelectBasicInformationDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 物料主数据Bom详情选择基础信息DTO
export interface IBomDetailsSelectBasicInformationDTO {
    // Bom详情id
    id: number;
    // 子物料id
    childMaterialId: number;
    // 子物料名称
    childMaterialName: string;
    // 子物料编号
    childMaterialCode: string;
    // 消耗数量
    totalConsumeCount: number;
}
