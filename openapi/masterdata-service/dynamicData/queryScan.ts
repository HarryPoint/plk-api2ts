import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/动态数据相关/queryScanUsingPOST
export default function fetchMethod(data: IAssociationFormScanQueryRequestDTO) {
    return post<IJSONResultListAssociationFormScanQueryResponseDTO['data']>({
      url: "/masterdata-service/dynamicData/queryScan",
      data,
    });
}
// AssociationFormScanQueryRequestDTO
export interface IAssociationFormScanQueryRequestDTO {
    // 应用ID
    appId: number;
    // 流程字段ID
    flowPathFormFieldId: number;
    // 编码列表
    codeList: string[];
    // 表单数据
    formData: Record<string, Record<string, any>>;
}
// JSONResult«List«AssociationFormScanQueryResponseDTO»»
export interface IJSONResultListAssociationFormScanQueryResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IAssociationFormScanQueryResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// AssociationFormScanQueryResponseDTO
export interface IAssociationFormScanQueryResponseDTO {
    // 表单记录ID
    id: number;
    // 表单记录编码
    code: string;
    // 显示字段值
    showFieldValue: string;
}
