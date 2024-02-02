// 工艺卡信息编辑DTO
export interface I工艺卡信息编辑DTO {
    // id
    id: number;
    // 工艺卡名称
    name: string;
    // 工艺卡编号
    code: string;
    // 物料ids
    materialIds: number[];
    // 工序ids
    processIds: number[];
    // 文件集合
    fileList: 工艺卡明细文件编辑DTO[];
    // 描述集合
    textList: 工艺卡明细描述编辑DTO[];
}
// JSONResult«工艺卡信息返回VO»
export interface IJSONResult工艺卡信息返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 工艺卡信息返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
