import { http } from '@/api/http';

// http://47.108.139.107:17400/doc.html#/default/生产任务自定义卡片样式相关/editUsingPOST_4
export default function fetchMethod(data: IProductionTaskCustomCardStyleEditListObjectDTO) {
    return http<IJSONResultobject>({
        url: "/app-mobile-web/api/app/mobile/produceTaskCustomCardStyle/edit",
        method: "post",
        data,
    });
}
// 生产任务自定义卡片样式编辑list对象DTO
export interface IProductionTaskCustomCardStyleEditListObjectDTO {
    // undefined
    customCardStyleList: IProductionTaskCustomCardStyleEditObjectDTO[];
}
// 生产任务自定义卡片样式编辑对象DTO
export interface IProductionTaskCustomCardStyleEditObjectDTO {
    // 字段名称
    formFieldName: string;
    // 字段code
    formFieldCode: string;
    // 字段类型
    formFieldType: string;
    // 字段表
    formFieldTable: string;
    // 显示位置
    displayPosition: string;
    // 扩展元数据
    metaData: string;
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
