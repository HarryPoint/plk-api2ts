import { post } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/质检分类/editUsingPOST_20
export default function fetchMethod(data: IEditTheQualityInspectionClassificationDTO) {
    return post<IJSONResultobject['data']>({
      url: "/app-enterprise-web/api/app/enterprise/qualityInspectionCategory/edit",
      data,
    });
}
// 编辑质检分类 DTO
export interface IEditTheQualityInspectionClassificationDTO {
    // id，如果不传就是新增
    id: number;
    // 质检分类名
    name: string;
    // 质检分类编码
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
