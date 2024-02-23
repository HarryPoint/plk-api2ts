import { http } from '@/api/http';

// http://47.108.139.107:17400/doc.html#/default/流程数据相关/calcDataLinkageUsingPOST
export default function fetchMethod(data: IDataLinkageCalcRequestDTO, extraOptions?: any) {
    return http<IJSONResultDataLinkageCalcResponseDTO>(
        {
            url: "/app-mobile-web/api/app/mobile/flowPathData/calcDataLinkage",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// DataLinkageCalcRequestDTO
export interface IDataLinkageCalcRequestDTO {
    // 表单字段ID
    flowPathFormFieldId: number;
    // 表单记录ID
    fromRecord: Record<string, Record<string, any>>;
}
// JSONResult«DataLinkageCalcResponseDTO»
export interface IJSONResultDataLinkageCalcResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IDataLinkageCalcResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// DataLinkageCalcResponseDTO
export interface IDataLinkageCalcResponseDTO {
    // 默认值
    defaultValue: string;
}
